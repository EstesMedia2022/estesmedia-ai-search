CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  referer_url TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_id TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  utm_keyword TEXT,
  utm_matchtype TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow edge function inserts via service role"
ON public.form_submissions
FOR INSERT
TO service_role
WITH CHECK (true);

CREATE POLICY "Allow edge function select via service role"
ON public.form_submissions
FOR SELECT
TO service_role
USING (true);