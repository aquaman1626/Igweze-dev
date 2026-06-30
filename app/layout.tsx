import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import VSCodeLayout from '@/components/vscode/VSCodeLayout'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Igweze.dev | Charles Igweze — Full-Stack Developer & Backend Engineer',
  description: 'Charles Chibuzo Igweze - Full-Stack Developer & Backend Engineer specializing in Python, Django, React, Node.js, and scalable systems.',
  keywords: ['Charles Igweze', 'Full-Stack Developer', 'Backend Engineer', 'React', 'Node.js', 'Python', 'Django', 'Lagos', 'Nigeria'],
  authors: [{ name: 'Charles Chibuzo Igweze' }],
  openGraph: {
    title: 'Igweze.dev | Charles Igweze',
    description: 'Full-Stack Developer & Backend Engineer',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <VSCodeLayout>{children}</VSCodeLayout>
      </body>
    </html>
  )
}
