export const metadata = {
  title: 'Settings | Reet Budget Tracker App',
  description: 'Customize your budget tracking experience',
}

export default function SettingsLayout({
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