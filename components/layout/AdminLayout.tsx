'use client'

/**
 * Admin Layout Component
 * Main layout wrapper for admin pages with header, sidebar, and content area
 */

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { AdminProvider } from '@/contexts/AdminContext'
import { AdminSidebar } from './AdminSidebar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Loader2, LogOut, Menu, ExternalLink, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface AdminLayoutProps {
  children: React.ReactNode
  title?: string
}

export function AdminLayout({ children, title }: AdminLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, isAdmin, signOut, loading } = useAuth()
  const router = useRouter()

  // Check authentication and admin status
  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push('/login?message=Admin access required')
    }
  }, [user, isAdmin, loading, router])

  // Show loading state while checking auth
  if (loading || !user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  const handleLogout = async () => {
    await signOut()
  }

  return (
    <AdminProvider>
      <div className="min-h-screen bg-background">
        {/* Sidebar - Desktop */}
        <div className="hidden md:block">
          <AdminSidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
        </div>

        {/* Main Content */}
        <div
          className={cn(
            'min-h-screen transition-all duration-300',
            isCollapsed ? 'md:ml-16' : 'md:ml-64'
          )}
        >
          {/* Mobile Menu Button - Only visible on mobile */}
          <div className="md:hidden sticky top-0 z-30 bg-background border-b">
            <div className="flex h-14 items-center px-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              {title && (
                <h1 className="ml-3 text-lg font-semibold text-foreground">{title}</h1>
              )}
            </div>
          </div>

          {/* Page Content */}
          <main className="p-4 lg:p-6">{children}</main>
        </div>

        {/* Floating Action Menu - Bottom Right */}
        <div className="fixed bottom-6 right-6 z-50">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronUp className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 mb-2">
              <DropdownMenuItem asChild>
                <Link href="/" target="_blank" className="cursor-pointer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  <span>View Site</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="fixed left-0 top-0 z-50 h-screen md:hidden">
              <AdminSidebar isCollapsed={false} onToggle={() => setIsMobileMenuOpen(false)} />
            </div>
          </>
        )}
      </div>
    </AdminProvider>
  )
}
