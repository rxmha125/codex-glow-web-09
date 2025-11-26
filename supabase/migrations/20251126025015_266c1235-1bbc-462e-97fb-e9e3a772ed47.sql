-- Create posts table
CREATE TABLE IF NOT EXISTS public.posts (
  id TEXT PRIMARY KEY,
  content TEXT NOT NULL,
  image_url TEXT,
  display_date TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  date_offset INTEGER NOT NULL DEFAULT 0
);

-- Create fingerprints table for device identification
CREATE TABLE IF NOT EXISTS public.fingerprints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_hash TEXT UNIQUE NOT NULL,
  ip_address TEXT,
  timezone TEXT,
  language TEXT,
  screen_resolution TEXT,
  hardware_concurrency INTEGER,
  canvas_hash TEXT,
  webgl_renderer TEXT,
  user_agent TEXT,
  platform TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_seen TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create post_interactions table
CREATE TABLE IF NOT EXISTS public.post_interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id TEXT NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  fingerprint_id UUID NOT NULL REFERENCES public.fingerprints(id) ON DELETE CASCADE,
  interaction_type TEXT NOT NULL CHECK (interaction_type IN ('like', 'comment')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(post_id, fingerprint_id, interaction_type)
);

-- Enable Row Level Security
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fingerprints ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_interactions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for posts (publicly readable, admin can insert/update/delete)
CREATE POLICY "Posts are viewable by everyone"
  ON public.posts FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert posts"
  ON public.posts FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update posts"
  ON public.posts FOR UPDATE
  USING (true);

CREATE POLICY "Anyone can delete posts"
  ON public.posts FOR DELETE
  USING (true);

-- RLS Policies for fingerprints (publicly accessible for anonymous users)
CREATE POLICY "Fingerprints are viewable by everyone"
  ON public.fingerprints FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert fingerprints"
  ON public.fingerprints FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update fingerprints"
  ON public.fingerprints FOR UPDATE
  USING (true);

-- RLS Policies for post_interactions (publicly accessible)
CREATE POLICY "Post interactions are viewable by everyone"
  ON public.post_interactions FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert post interactions"
  ON public.post_interactions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can delete post interactions"
  ON public.post_interactions FOR DELETE
  USING (true);

-- Create indexes for better performance
CREATE INDEX idx_posts_created_at ON public.posts(created_at DESC);
CREATE INDEX idx_fingerprints_user_hash ON public.fingerprints(user_hash);
CREATE INDEX idx_post_interactions_post_id ON public.post_interactions(post_id);
CREATE INDEX idx_post_interactions_fingerprint_id ON public.post_interactions(fingerprint_id);

-- Function to update last_seen timestamp
CREATE OR REPLACE FUNCTION public.update_fingerprint_last_seen()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_seen = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update last_seen on fingerprint updates
CREATE TRIGGER update_fingerprint_last_seen_trigger
  BEFORE UPDATE ON public.fingerprints
  FOR EACH ROW
  EXECUTE FUNCTION public.update_fingerprint_last_seen();