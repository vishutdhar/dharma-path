import './globals.css'
import type { Metadata } from 'next'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Dharma Path | Finally Understand Hinduism',
  description: 'A structured learning path for beginners to understand Hinduism, from core concepts to the Bhagavad Gita.',
  keywords: ['Hinduism', 'Bhagavad Gita', 'learn hinduism', 'dharma', 'karma', 'spiritual learning'],
  openGraph: {
    title: 'Dharma Path | Finally Understand Hinduism',
    description: 'The starting point you never had. Learn Hinduism step by step.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#F97316" />
      </head>
      <body className="min-h-screen bg-cream-100 bg-sacred-pattern">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
