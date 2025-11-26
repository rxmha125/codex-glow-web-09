import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { postId, fingerprintId } = await req.json();

    console.log('Getting interactions for post:', postId, 'fingerprint:', fingerprintId);

    // Get like count for post
    const { count: likeCount, error: likeCountError } = await supabase
      .from('post_interactions')
      .select('id', { count: 'exact', head: true })
      .eq('post_id', postId)
      .eq('interaction_type', 'like');

    if (likeCountError) {
      console.error('Error getting like count:', likeCountError);
      throw likeCountError;
    }

    // Check if current user liked the post
    let userLiked = false;
    if (fingerprintId) {
      const { data: userLike, error: userLikeError } = await supabase
        .from('post_interactions')
        .select('id')
        .eq('post_id', postId)
        .eq('fingerprint_id', fingerprintId)
        .eq('interaction_type', 'like')
        .maybeSingle();

      if (userLikeError) {
        console.error('Error checking user like:', userLikeError);
      } else {
        userLiked = !!userLike;
      }
    }

    return new Response(
      JSON.stringify({ 
        likeCount: likeCount || 0,
        userLiked
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in get-post-interactions function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
