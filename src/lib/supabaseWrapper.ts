import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

let supabaseInstance: SupabaseClient<Database> | null = null;

export const getSupabase = (): SupabaseClient<Database> | null => {
  if (supabaseInstance) return supabaseInstance;
  
  try {
    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    
    if (!url || !key) {
      console.warn('Supabase credentials not available');
      return null;
    }
    
    supabaseInstance = createClient<Database>(url, key, {
      auth: {
        storage: localStorage,
        persistSession: true,
        autoRefreshToken: true,
      }
    });
    
    return supabaseInstance;
  } catch (error) {
    console.error('Failed to initialize Supabase:', error);
    return null;
  }
};

// Export a lazy-loaded supabase instance
export const supabaseSafe = {
  get client() {
    return getSupabase();
  }
};
