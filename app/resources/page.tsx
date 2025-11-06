import { Metadata } from 'next';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { FileText, Search, Filter } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All Resources | approvU',
  description: 'Browse all our mortgage resources, guides, calculators, and information pages.',
};

export default async function ResourcesPage() {
  const supabase = await createServerSupabaseClient();

  // Fetch all published pages
  const { data: pages } = await supabase
    .from('pages')
    .select('id, title, path, description, excerpt, vertical, page_type, created_at, is_featured')
    .eq('status', 'published')
    .order('vertical', { ascending: true })
    .order('created_at', { ascending: false });

  // Group pages by vertical
  const groupedPages: Record<string, typeof pages> = {};
  pages?.forEach((page) => {
    const vertical = page.vertical || 'Other';
    if (!groupedPages[vertical]) {
      groupedPages[vertical] = [];
    }
    groupedPages[vertical].push(page);
  });

  // Get stats
  const totalPages = pages?.length || 0;
  const featuredCount = pages?.filter(p => p.is_featured).length || 0;
  const verticals = Object.keys(groupedPages);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Hero Section */}
      <div className="bg-primary/10 border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Browse our complete collection of mortgage guides, calculators, and information pages. Everything you need to make informed decisions about your mortgage.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <FileText className="w-4 h-4 mr-2" />
                {totalPages} Total Pages
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Filter className="w-4 h-4 mr-2" />
                {verticals.length} Categories
              </Badge>
              {featuredCount > 0 && (
                <Badge variant="default" className="text-lg px-4 py-2">
                  ⭐ {featuredCount} Featured
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {verticals.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No Pages Yet</h3>
              <p className="text-muted-foreground">
                Pages created in the admin panel will appear here.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-12">
            {verticals.map((vertical) => {
              const verticalPages = groupedPages[vertical];
              const displayName = vertical.charAt(0).toUpperCase() + vertical.slice(1);

              return (
                <div key={vertical} id={vertical.toLowerCase()}>
                  {/* Category Header */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                      {displayName}
                      <Badge variant="outline">{verticalPages.length}</Badge>
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                  </div>

                  {/* Pages Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {verticalPages.map((page) => (
                      <Link
                        key={page.id}
                        href={`/${page.path}`}
                        className="group"
                      >
                        <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
                          <CardHeader>
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                                {page.title}
                              </CardTitle>
                              {page.is_featured && (
                                <Badge variant="default" className="shrink-0">
                                  ⭐
                                </Badge>
                              )}
                            </div>
                            {page.page_type && (
                              <Badge variant="outline" className="w-fit">
                                {page.page_type}
                              </Badge>
                            )}
                          </CardHeader>
                          <CardContent>
                            {(page.description || page.excerpt) && (
                              <CardDescription className="line-clamp-3">
                                {page.description || page.excerpt}
                              </CardDescription>
                            )}
                            <div className="mt-4 text-sm text-primary font-medium group-hover:underline">
                              Read more →
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Quick Navigation */}
        {verticals.length > 3 && (
          <Card className="mt-12">
            <CardHeader>
              <CardTitle>Quick Navigation</CardTitle>
              <CardDescription>Jump to a specific category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {verticals.map((vertical) => (
                  <a
                    key={vertical}
                    href={`#${vertical.toLowerCase()}`}
                    className="px-4 py-2 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    {vertical.charAt(0).toUpperCase() + vertical.slice(1)}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* CTA Section */}
        <Card className="mt-12 bg-primary text-primary-foreground">
          <CardContent className="py-12 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get in touch with our mortgage experts for personalized guidance.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors"
            >
              Contact Us
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
