import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'ATX Social Hour',
  description: 'Find out where to eat and drink in Austin, Texas.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-50 antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
