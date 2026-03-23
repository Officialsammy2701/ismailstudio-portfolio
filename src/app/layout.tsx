// ============================================================
// src/app/layout.tsx
// Root layout — wraps every page with shared metadata,
// navigation, footer, and toast notifications.
// ============================================================

import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SocialSidebar from '@/components/ui/SocialSidebar'
import { personal } from '@/data/portfolio'
import '@/styles/globals.css'

// ── SEO Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: `${personal.fullName} | Developer`,
    template: `%s | ${personal.name}`,
  },
  description: personal.siteDescription,
  openGraph: {
    type:        'website',
    locale:      'en_CA',
    siteName:    `${personal.fullName} Portfolio`,
    title:       `${personal.fullName} | Developer`,
    description: personal.siteDescription,
  },
  twitter: {
    card:        'summary_large_image',
    title:       `${personal.fullName} | Developer`,
    description: personal.siteDescription,
  },
  // Tells crawlers not to index until you're ready to go live.
  // Remove this line when you deploy for real.
  // robots: { index: false },
}

// ── Root Layout ───────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Toast notifications (used by the contact form) */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#14141f',
              color:      '#f0f4ff',
              border:     '1px solid rgba(0,229,255,0.2)',
              fontFamily: 'var(--font-body)',
            },
            success: { iconTheme: { primary: '#00e5ff', secondary: '#0a0a0f' } },
          }}
        />
        <SocialSidebar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
