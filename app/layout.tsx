import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Devcation Hack N Solve 2026 | IIT Delhi',
  description: 'Where Speed, Skill and Code Converge. Join the flagship hackathon organized by GDG IGDTUW in collaboration with GDG IIT Delhi. Prize pool of ₹1,50,000!',
  keywords: ['hackathon', 'IIT Delhi', 'GDG', 'coding', 'devcation', 'hack n solve', '2026'],
  authors: [{ name: 'GDG IGDTUW' }],
  openGraph: {
    title: 'Devcation Hack N Solve 2026',
    description: 'Where Speed, Skill and Code Converge. Prize pool of ₹1,50,000!',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#020617] text-[#F8FAFC] overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
