import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wanderlust & Wellness | Luxury Adventure Travel',
  description: 'AI-powered luxury wellness travel advisor. Discover curated resorts, expedition cruises, and active wellness escapes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-stone-900 text-white">{children}</body>
    </html>
  )
}
