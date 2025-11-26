-- Add is_admin flag to fingerprints table
ALTER TABLE public.fingerprints ADD COLUMN is_admin boolean DEFAULT false;

-- Create comments table
CREATE TABLE public.comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id text NOT NULL,
  fingerprint_id uuid NOT NULL REFERENCES public.fingerprints(id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Enable RLS on comments
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Comments policies
CREATE POLICY "Anyone can view comments"
  ON public.comments FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert comments"
  ON public.comments FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can delete their own comments"
  ON public.comments FOR DELETE
  USING (fingerprint_id IN (SELECT id FROM public.fingerprints WHERE user_hash = current_setting('request.jwt.claims', true)::json->>'user_hash'));

-- Create post_views table for tracking views
CREATE TABLE public.post_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id text NOT NULL,
  fingerprint_id uuid NOT NULL REFERENCES public.fingerprints(id) ON DELETE CASCADE,
  viewed_at timestamp with time zone DEFAULT now() NOT NULL,
  UNIQUE(post_id, fingerprint_id)
);

-- Enable RLS on post_views
ALTER TABLE public.post_views ENABLE ROW LEVEL SECURITY;

-- Post views policies
CREATE POLICY "Anyone can view post_views"
  ON public.post_views FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert post_views"
  ON public.post_views FOR INSERT
  WITH CHECK (true);

-- Add login tracking columns to fingerprints
ALTER TABLE public.fingerprints ADD COLUMN login_count integer DEFAULT 1;
ALTER TABLE public.fingerprints ADD COLUMN login_history jsonb DEFAULT '[]'::jsonb;