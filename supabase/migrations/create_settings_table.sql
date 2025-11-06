-- Create settings table for site configuration
CREATE TABLE IF NOT EXISTS public.settings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    key VARCHAR(255) UNIQUE NOT NULL,
    value TEXT,
    category VARCHAR(100) DEFAULT 'general',
    label VARCHAR(255),
    type VARCHAR(50) DEFAULT 'string', -- string, number, boolean, json
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index on key for faster lookups
CREATE INDEX IF NOT EXISTS idx_settings_key ON public.settings(key);
CREATE INDEX IF NOT EXISTS idx_settings_category ON public.settings(category);

-- Enable Row Level Security
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- Create policies for settings table
-- Admin users can do everything
CREATE POLICY "Admins can do everything with settings"
    ON public.settings
    FOR ALL
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM auth.users
            WHERE auth.users.id = auth.uid()
            AND auth.users.raw_app_meta_data->>'role' = 'admin'
        )
    );

-- Public read access for certain settings (optional)
CREATE POLICY "Public can read public settings"
    ON public.settings
    FOR SELECT
    TO public
    USING (category = 'public');

-- Insert default settings
INSERT INTO public.settings (key, value, category, label, type, description) VALUES
    -- Site Settings
    ('siteName', 'approvU Mortgage', 'site', 'Site Name', 'string', 'The name of your website'),
    ('siteTagline', 'Your trusted mortgage partner in Canada', 'site', 'Site Tagline', 'string', 'A short description of your site'),
    ('siteUrl', 'https://approvu.com', 'site', 'Site URL', 'string', 'The full URL of your website'),
    ('contactEmail', 'info@approvu.com', 'site', 'Contact Email', 'string', 'Primary contact email address'),
    ('contactPhone', '1-800-XXX-XXXX', 'site', 'Contact Phone', 'string', 'Primary contact phone number'),
    
    -- SEO Settings
    ('metaTitle', 'approvU - Mortgage Solutions Canada', 'seo', 'Meta Title', 'string', 'Default page title for SEO'),
    ('metaDescription', 'Expert mortgage guidance, calculators, and solutions for Canadian homebuyers. Get pre-approved today with approvU.', 'seo', 'Meta Description', 'string', 'Default meta description for SEO'),
    ('googleAnalyticsId', '', 'seo', 'Google Analytics ID', 'string', 'Google Analytics tracking ID (e.g., G-XXXXXXXXXX)'),
    
    -- Email Settings
    ('smtpHost', 'smtp.gmail.com', 'email', 'SMTP Host', 'string', 'SMTP server hostname'),
    ('smtpPort', '587', 'email', 'SMTP Port', 'string', 'SMTP server port'),
    ('smtpUsername', '', 'email', 'SMTP Username', 'string', 'SMTP authentication username'),
    ('smtpPassword', '', 'email', 'SMTP Password', 'string', 'SMTP authentication password'),
    ('emailFromAddress', 'noreply@approvu.com', 'email', 'From Email Address', 'string', 'Default sender email address'),
    ('emailFromName', 'approvU Team', 'email', 'From Name', 'string', 'Default sender name'),
    
    -- Feature Toggles
    ('enableOnlineApplications', 'true', 'features', 'Enable Online Applications', 'boolean', 'Allow users to submit mortgage applications online'),
    ('enableAppointmentBooking', 'true', 'features', 'Enable Appointment Booking', 'boolean', 'Enable online appointment scheduling'),
    ('enableBlogComments', 'false', 'features', 'Enable Blog Comments', 'boolean', 'Allow comments on blog posts'),
    ('enableRatingsReviews', 'true', 'features', 'Enable Ratings & Reviews', 'boolean', 'Enable ratings and reviews for agents'),
    ('maintenanceMode', 'false', 'features', 'Maintenance Mode', 'boolean', 'Display maintenance page to visitors')
ON CONFLICT (key) DO NOTHING;

-- Add comment to table
COMMENT ON TABLE public.settings IS 'Site-wide configuration settings';
