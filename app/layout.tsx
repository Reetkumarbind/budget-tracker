import { Inter } from 'next/font/google'
import './globals.css'
import { MainNav } from '@/components/ui/nav'
import { SettingsProvider } from '@/contexts/settings-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reet Budget Tracker App',
  description: 'Track and manage your finances with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SettingsProvider>
          <MainNav />
          {children}
        </SettingsProvider>
      </body>
    </html>
  )
}

