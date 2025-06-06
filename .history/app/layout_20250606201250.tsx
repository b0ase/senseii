import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Senseii - AI-First Bitcoin SV Education Platform',
  description: 'Learn Bitcoin from Satoshi himself. Master blockchain technology, business incubation, and the original Bitcoin vision through AI-powered education.',
  keywords: ['Bitcoin SV', 'BSV', 'Blockchain Education', 'Satoshi', 'AI Learning', 'Business Incubation'],
  authors: [{ name: 'Senseii Platform' }],
  openGraph: {
    title: 'Senseii - AI-First Bitcoin SV Education Platform',
    description: 'Learn Bitcoin from Satoshi himself. Master blockchain technology and business incubation.',
    type: 'website',
    url: 'https://senseii.org',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senseii - AI-First Bitcoin SV Education Platform',
    description: 'Learn Bitcoin from Satoshi himself. Master blockchain technology and business incubation.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50">
          {children}
        </div>
      </body>
    </html>
  )
} 