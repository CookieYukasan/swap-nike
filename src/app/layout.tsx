import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Swap Nike',
    default: 'Not Found | Swap Nike',
  },
  description: 'Fictional Nike Store to trade sneakers',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body>{children}</body>
    </html>
  )
}
