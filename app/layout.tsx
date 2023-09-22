import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fastest',
  description: 'Fastest project in performance',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  )
}

export default RootLayout
