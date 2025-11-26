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

    const { postId, fingerprintId, content, action } = await req.json();

    if (action === 'create') {
      // Create a new comment
      const { data, error } = await supabase
        .from('comments')
        .insert({
          post_id: postId,
          fingerprint_id: fingerprintId,
          content: content
        })
        .select('*')
        .single();

      if (error) throw error;

      return new Response(
        JSON.stringify({ comment: data }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else if (action === 'delete') {
      // Delete a comment (only if user owns it)
      const { commentId } = await req.json();
      
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', commentId)
        .eq('fingerprint_id', fingerprintId);

      if (error) throw error;

      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Invalid action' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in comment-post function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
