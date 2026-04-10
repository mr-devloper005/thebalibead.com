'use client'

import type { ComponentType } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Building2,
  FileText,
  Home,
  Image as ImageIcon,
  LayoutGrid,
  Search,
  Tag,
  User,
} from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const taskIcons: Record<TaskKey, ComponentType<{ className?: string }>> = {
  article: FileText,
  listing: Building2,
  sbm: LayoutGrid,
  classified: Tag,
  image: ImageIcon,
  profile: User,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
}

export function BottomNav() {
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const tasks = SITE_CONFIG.tasks.filter((t) => t.enabled && t.key !== 'profile')

  const accountHref = isAuthenticated ? '/dashboard' : '/login'
  const accountLabel = isAuthenticated ? 'Account' : 'Sign in'

  const navItems: {
    href: string
    label: string
    icon: ComponentType<{ className?: string }>
    match: (p: string) => boolean
  }[] = [
    { href: '/', label: 'Home', icon: Home, match: (p) => p === '/' },
    ...tasks.map((task) => ({
      href: task.route,
      label: task.label,
      icon: taskIcons[task.key] || LayoutGrid,
      match: (p: string) => p === task.route || p.startsWith(`${task.route}/`),
    })),
    { href: '/search', label: 'Search', icon: Search, match: (p) => p.startsWith('/search') },
    {
      href: accountHref,
      label: accountLabel,
      icon: User,
      match: (p) => p.startsWith('/login') || p.startsWith('/register') || p.startsWith('/dashboard') || p.startsWith('/settings') || p.startsWith('/profile'),
    },
  ]

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#8CC7C4]/45 bg-[#FFF6F6]/92 pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-8px_32px_rgba(44,104,123,0.08)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#FFF6F6]/85"
    >
      <div className="mx-auto flex max-w-2xl items-stretch justify-around gap-0 px-1 pt-1.5 sm:max-w-4xl sm:px-4">
        {navItems.map(({ href, label, icon: Icon, match }) => {
          const active = match(pathname)
          return (
            <Link
              key={href + label}
              href={href}
              className={cn(
                'flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-2 text-[10px] font-semibold tracking-tight transition-colors sm:text-xs',
                active ? 'text-[#DB1A1A]' : 'text-[#2C687B]/65 hover:text-[#2C687B]',
              )}
            >
              <span
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-full transition-colors',
                  active ? 'bg-[#DB1A1A]/12 text-[#DB1A1A]' : 'bg-transparent text-current',
                )}
              >
                <Icon className="h-[1.15rem] w-[1.15rem] shrink-0 sm:h-5 sm:w-5" />
              </span>
              <span className="max-w-[4.5rem] truncate text-center leading-tight">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
