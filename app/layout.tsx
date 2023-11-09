"use client"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import { store } from './store/store'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Backstory',
//   description: 'Backstory Company',
// }

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <header>
        <link rel="stylesheet" href="/assets/images/logo.png" sizes='32*32' />
      </header> */}
      <Provider store={store}>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}

// export default wrapper.withRedux(RootLayout);
export default RootLayout
