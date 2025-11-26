import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface DeviceFingerprint {
  ipAddress?: string;
  timezone: string;
  language: string;
  screenResolution: string;
  hardwareConcurrency: number;
  canvasHash: string;
  webglRenderer: string;
  userAgent: string;
  platform: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { fingerprint, fingerprintHash } = await req.json();

    console.log('Identifying user with hash:', fingerprintHash);

    // First, try to find exact match by hash
    const { data: exactMatch, error: exactError } = await supabase
      .from('fingerprints')
      .select('id')
      .eq('user_hash', fingerprintHash)
      .maybeSingle();

    if (exactMatch) {
      console.log('Found exact fingerprint match:', exactMatch.id);
      
      // Update last_seen
      await supabase
        .from('fingerprints')
        .update({ last_seen: new Date().toISOString() })
        .eq('id', exactMatch.id);
      
      return new Response(
        JSON.stringify({ fingerprintId: exactMatch.id, matched: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // If no exact match, try fuzzy matching on core identifiers
    const { data: allFingerprints, error: allError } = await supabase
      .from('fingerprints')
      .select('*');

    if (allFingerprints && allFingerprints.length > 0) {
      // Core identifiers for matching (need 4+ matches)
      const coreIdentifiers = [
        'timezone',
        'screen_resolution',
        'hardware_concurrency',
        'canvas_hash',
        'webgl_renderer',
        'user_agent',
        'platform',
        'ip_address'
      ];

      for (const existing of allFingerprints) {
        let matches = 0;
        
        if (existing.timezone === fingerprint.timezone) matches++;
        if (existing.screen_resolution === fingerprint.screenResolution) matches++;
        if (existing.hardware_concurrency === fingerprint.hardwareConcurrency) matches++;
        if (existing.canvas_hash === fingerprint.canvasHash) matches++;
        if (existing.webgl_renderer === fingerprint.webglRenderer) matches++;
        if (existing.user_agent === fingerprint.userAgent) matches++;
        if (existing.platform === fingerprint.platform) matches++;
        if (existing.ip_address && fingerprint.ipAddress && existing.ip_address === fingerprint.ipAddress) matches++;

        // If 4 or more core identifiers match, consider it the same user
        if (matches >= 4) {
          console.log(`Found fuzzy match with ${matches} matching identifiers:`, existing.id);
          
          // Update the fingerprint with new data
          await supabase
            .from('fingerprints')
            .update({
              ip_address: fingerprint.ipAddress,
              user_agent: fingerprint.userAgent,
              last_seen: new Date().toISOString()
            })
            .eq('id', existing.id);
          
          return new Response(
            JSON.stringify({ fingerprintId: existing.id, matched: true, fuzzyMatch: matches }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
      }
    }

    // No match found, create new fingerprint
    console.log('No match found, creating new fingerprint');
    
    const { data: newFingerprint, error: insertError } = await supabase
      .from('fingerprints')
      .insert({
        user_hash: fingerprintHash,
        ip_address: fingerprint.ipAddress,
        timezone: fingerprint.timezone,
        language: fingerprint.language,
        screen_resolution: fingerprint.screenResolution,
        hardware_concurrency: fingerprint.hardwareConcurrency,
        canvas_hash: fingerprint.canvasHash,
        webgl_renderer: fingerprint.webglRenderer,
        user_agent: fingerprint.userAgent,
        platform: fingerprint.platform
      })
      .select('id')
      .single();

    if (insertError) {
      console.error('Error creating fingerprint:', insertError);
      throw insertError;
    }

    console.log('Created new fingerprint:', newFingerprint.id);

    return new Response(
      JSON.stringify({ fingerprintId: newFingerprint.id, matched: false, newUser: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in identify-user function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
