import { createClient } from '@supabase/supabase-js';

// Check if Supabase is configured
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = !!(supabaseUrl && supabaseKey);

// Create client only if configured
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Helper to check if Supabase is available
export const checkSupabaseAvailable = (): boolean => {
  if (!isSupabaseConfigured) {
    console.warn('Supabase not configured, using localStorage fallback');
    return false;
  }
  return true;
};
