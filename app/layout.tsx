import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Backstory',
  description: 'Backstory Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <header>
        <link rel="stylesheet" href="/assets/images/logo.png" sizes='32*32' />
      </header> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
