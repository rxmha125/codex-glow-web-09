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

    const { postId, fingerprintId, action } = await req.json();

    console.log('Processing like action:', { postId, fingerprintId, action });

    if (!postId || !fingerprintId) {
      throw new Error('Missing postId or fingerprintId');
    }

    // Check if interaction already exists
    const { data: existing, error: checkError } = await supabase
      .from('post_interactions')
      .select('id')
      .eq('post_id', postId)
      .eq('fingerprint_id', fingerprintId)
      .eq('interaction_type', 'like')
      .maybeSingle();

    if (action === 'like') {
      if (existing) {
        console.log('Like already exists');
        return new Response(
          JSON.stringify({ success: true, alreadyLiked: true }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Add like
      const { error: insertError } = await supabase
        .from('post_interactions')
        .insert({
          post_id: postId,
          fingerprint_id: fingerprintId,
          interaction_type: 'like'
        });

      if (insertError) {
        console.error('Error adding like:', insertError);
        throw insertError;
      }

      console.log('Like added successfully');
    } else if (action === 'unlike') {
      if (!existing) {
        console.log('No like to remove');
        return new Response(
          JSON.stringify({ success: true, notLiked: true }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Remove like
      const { error: deleteError } = await supabase
        .from('post_interactions')
        .delete()
        .eq('id', existing.id);

      if (deleteError) {
        console.error('Error removing like:', deleteError);
        throw deleteError;
      }

      console.log('Like removed successfully');
    }

    // Get updated like count
    const { count, error: countError } = await supabase
      .from('post_interactions')
      .select('id', { count: 'exact', head: true })
      .eq('post_id', postId)
      .eq('interaction_type', 'like');

    if (countError) {
      console.error('Error getting like count:', countError);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        liked: action === 'like',
        likeCount: count || 0
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in like-post function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
