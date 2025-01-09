import { Sidebar } from '../components/sidebar'
import { ThemeToggle } from '../components/theme-toggle'

export const metadata = {
  title: 'Dashboard | Reet Budget Tracker App',
  description: 'View and manage your budget',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      {children}
    </div>
  )
}

