-- Leads table for newsletter / lead magnet captures
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  source TEXT NOT NULL,
  language TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Anyone (including unauthenticated visitors) may submit a lead
CREATE POLICY "Anyone can insert a lead"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(name) > 0 AND char_length(name) <= 120
    AND char_length(email) > 0 AND char_length(email) <= 255
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND source IN ('wedding-guide','blog-suit-mistakes','newsletter')
  );

-- No SELECT policy: leads are write-only from the public site
CREATE INDEX leads_source_created_idx ON public.leads (source, created_at DESC);
CREATE INDEX leads_email_idx ON public.leads (email);