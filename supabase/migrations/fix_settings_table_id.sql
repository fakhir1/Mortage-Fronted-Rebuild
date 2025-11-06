-- Fix the settings table to auto-generate IDs

-- First, drop the existing table if you want to start fresh
-- DROP TABLE IF EXISTS public.settings CASCADE;

-- Or, if the table exists, just alter it to add the default
ALTER TABLE public.settings 
ALTER COLUMN id SET DEFAULT gen_random_uuid();

-- Make sure the pgcrypto extension is enabled (for gen_random_uuid)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Verify the fix
-- Run this to test:
-- INSERT INTO settings (key, value, category) VALUES ('test', 'value', 'test') RETURNING *;
