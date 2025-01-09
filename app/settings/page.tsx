import { SettingsForm } from '@/components/settings/settings-form'
import { Card } from '@/components/ui/card'

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="grid gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Preferences</h2>
          <SettingsForm />
        </Card>
      </div>
    </div>
  )
} 