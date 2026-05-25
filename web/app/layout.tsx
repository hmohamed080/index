import type { Metadata } from 'next'
import { Cairo, Montserrat } from 'next/font/google'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cairo',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'INDEX BUSINESS SCHOOL - IBS',
  description:
    'Practical IBS programs in Graphic Design, AI Tools, Build a Full Online Brand, and Digital Marketing.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '256x256' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
