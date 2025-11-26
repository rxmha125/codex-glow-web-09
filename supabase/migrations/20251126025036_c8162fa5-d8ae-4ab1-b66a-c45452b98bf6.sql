-- Fix function search path security warning
CREATE OR REPLACE FUNCTION public.update_fingerprint_last_seen()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.last_seen = NOW();
  RETURN NEW;
END;
$$;