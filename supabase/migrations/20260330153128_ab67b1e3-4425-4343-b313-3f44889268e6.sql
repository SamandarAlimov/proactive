
-- Create contacts table
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Public can insert contacts
CREATE POLICY "Anyone can submit contact" ON public.contacts
  FOR INSERT WITH CHECK (true);

-- Only authenticated users (admins) can read
CREATE POLICY "Authenticated users can view contacts" ON public.contacts
  FOR SELECT TO authenticated USING (true);

-- Only authenticated users can update status
CREATE POLICY "Authenticated users can update contacts" ON public.contacts
  FOR UPDATE TO authenticated USING (true);

-- Create news table
CREATE TABLE public.news (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title_uz TEXT NOT NULL,
  title_en TEXT NOT NULL,
  title_ru TEXT NOT NULL,
  excerpt_uz TEXT,
  excerpt_en TEXT,
  excerpt_ru TEXT,
  content_uz TEXT,
  content_en TEXT,
  content_ru TEXT,
  image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;

-- Everyone can read published news
CREATE POLICY "Anyone can read published news" ON public.news
  FOR SELECT USING (published = true);

-- Authenticated users can manage news
CREATE POLICY "Authenticated users can manage news" ON public.news
  FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Update timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_news_updated_at
  BEFORE UPDATE ON public.news
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
