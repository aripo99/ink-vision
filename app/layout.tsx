import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ink Vision',
  description: 'Generate tattoo ideas from a prompt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <p className="text-3xl p-8">Ink Vision</p>
          <p className="text-l ml-8">Coming soon...</p>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
