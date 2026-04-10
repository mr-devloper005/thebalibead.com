import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from '@/lib/auth-context'
import { buildSiteMetadata } from '@/lib/seo'
import { getFactoryState } from '@/design/factory/get-factory-state'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body-ui',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading-ui',
  weight: ['600', '700', '800'],
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
  return buildSiteMetadata()
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const { recipe, brandPack } = getFactoryState()

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        data-site-shell={recipe.homeLayout}
        data-motion-pack={recipe.motionPack}
        data-nav-layout="bottom"
        className={`marketing-site ${brandPack.bodyClassName} ${brandPack.fontClassName} ${brandPack.paletteClassName} ${inter.variable} ${plusJakarta.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
