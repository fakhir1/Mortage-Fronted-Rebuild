/**
 * Dynamic Navigation Hook
 * Fetches navigation items from database including dynamic pages
 */

import { useEffect, useState } from 'react';

export interface NavItem {
  name: string;
  href: string;
  submenu?: NavItem[];
  isDynamic?: boolean; // Flag for dynamically loaded pages
}

/**
 * Hook to get navigation items
 * Combines static navigation with dynamic pages from database
 */
export function useNavigation() {
  const [dynamicPages, setDynamicPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDynamicPages();
  }, []);

  const fetchDynamicPages = async () => {
    try {
      // Fetch published pages that should appear in navigation
      const response = await fetch('/api/admin/pages?status=published&is_featured=true&limit=50');
      
      if (response.ok) {
        const data = await response.json();
        setDynamicPages(data.data || []);
      }
    } catch (error) {
      console.error('Failed to fetch dynamic pages:', error);
    } finally {
      setLoading(false);
    }
  };

  // Static navigation (always present)
  const staticNavigation: NavItem[] = [
    { name: "Home", href: "/" },
    { 
      name: "Solutions", 
      href: "/mortgage/",
      submenu: [
        { name: "Purchase Mortgage", href: "/mortgage/purchase/" },
        { name: "Refinance Mortgage", href: "/mortgage/refinance/" },
        { name: "Pre-Approval", href: "/mortgage/approval/" }
      ]
    },
    { 
      name: "Programs", 
      href: "/mortgage/first-time-buyer/",
      submenu: [
        { name: "First-Time Buyer", href: "/mortgage/first-time-buyer/" },
        { name: "Self-Employed", href: "/mortgage/self-employed/" },
        { name: "Bad Credit", href: "/mortgage/bad-credit/" },
        { name: "Investor", href: "/mortgage/investor/" },
        { name: "Professional Mortgages", href: "/mortgage/professional/" },
        { name: "New to Canada", href: "/mortgage/newcomer/" }
      ]
    },
    { 
      name: "Resources", 
      href: "/mortgage/rates/",
      submenu: [
        { name: "Calculators", href: "/mortgage/calculators/" },
        { name: "Rates", href: "/mortgage/rates/" },
        { name: "Guides", href: "/mortgage/guides/" }
      ]
    },
    { name: "About", href: "/about/" },
    { name: "Agents", href: "/agents/" },
    { name: "Contact", href: "/contact/" }
  ];

  // Group dynamic pages by vertical for submenu
  const groupedDynamicPages: { [key: string]: NavItem[] } = {};
  
  dynamicPages.forEach((page) => {
    const vertical = page.vertical || 'other';
    if (!groupedDynamicPages[vertical]) {
      groupedDynamicPages[vertical] = [];
    }
    groupedDynamicPages[vertical].push({
      name: page.title,
      href: `/${page.slug}`,
      isDynamic: true,
    });
  });

  // Add dynamic pages to appropriate sections
  const enhancedNavigation = staticNavigation.map((item) => {
    // Add dynamic "guides" pages to Resources submenu
    if (item.name === "Resources" && groupedDynamicPages['guides']) {
      return {
        ...item,
        submenu: [
          ...(item.submenu || []),
          ...groupedDynamicPages['guides'],
        ],
      };
    }
    
    // Add dynamic "mortgage" pages to Solutions submenu
    if (item.name === "Solutions" && groupedDynamicPages['mortgage']) {
      return {
        ...item,
        submenu: [
          ...(item.submenu || []),
          ...groupedDynamicPages['mortgage'],
        ],
      };
    }

    return item;
  });

  // Add a "More" dropdown for other dynamic pages
  if (groupedDynamicPages['general'] || groupedDynamicPages['other']) {
    const morePages = [
      ...(groupedDynamicPages['general'] || []),
      ...(groupedDynamicPages['other'] || []),
    ];

    if (morePages.length > 0) {
      enhancedNavigation.splice(enhancedNavigation.length - 1, 0, {
        name: "More",
        href: "#",
        submenu: morePages,
      });
    }
  }

  return {
    navigation: enhancedNavigation,
    loading,
    staticNavigation,
    dynamicPages,
  };
}

/**
 * Get footer navigation links
 * Groups pages by category for footer columns
 */
export function useFooterNavigation() {
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFooterPages();
  }, []);

  const fetchFooterPages = async () => {
    try {
      // Fetch published pages for footer
      const response = await fetch('/api/admin/pages?status=published&limit=100');
      
      if (response.ok) {
        const data = await response.json();
        setPages(data.data || []);
      }
    } catch (error) {
      console.error('Failed to fetch footer pages:', error);
    } finally {
      setLoading(false);
    }
  };

  // Group pages by vertical
  const groupedPages: { [key: string]: any[] } = {
    mortgage: [],
    guides: [],
    general: [],
    other: [],
  };

  pages.forEach((page) => {
    const vertical = page.vertical || 'other';
    if (groupedPages[vertical]) {
      groupedPages[vertical].push(page);
    } else {
      groupedPages.other.push(page);
    }
  });

  return {
    groupedPages,
    allPages: pages,
    loading,
  };
}
