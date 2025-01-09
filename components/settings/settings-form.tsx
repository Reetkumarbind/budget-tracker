'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Select } from '@/components/ui/select'
import { toast } from '@/components/ui/toast'
import { useSettings } from '@/contexts/settings-context'
import { useTranslation } from '@/hooks/useTranslation'
import { Globe, Coins, Sun, Calendar } from 'lucide-react'

export function SettingsForm() {
  const settings = useSettings()
  const { t } = useTranslation()
  const [formState, setFormState] = useState(settings)

  useEffect(() => {
    setFormState(settings)
  }, [settings])

  const handleSettingChange = (key: string, value: any) => {
    setFormState(prev => ({ ...prev, [key]: value }))
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    handleSettingChange(name, value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    Object.entries(formState).forEach(([key, value]) => {
      if (key !== 'updateSettings' && value !== settings[key as keyof typeof settings]) {
        settings.updateSettings(key, value)
      }
    })

    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Notifications Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium border-b pb-2">{t('notifications')}</h3>
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="notifications">{t('pushNotifications')}</Label>
            <p className="text-sm text-muted-foreground">{t('notifyBudgetUpdates')}</p>
          </div>
          <Switch
            id="notifications"
            checked={formState.notifications}
            onCheckedChange={(checked) => handleSettingChange('notifications', checked)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="emailAlerts">{t('emailAlerts')}</Label>
            <p className="text-sm text-muted-foreground">{t('receiveBudgetReports')}</p>
          </div>
          <Switch
            id="emailAlerts"
            checked={formState.emailAlerts}
            onCheckedChange={(checked) => handleSettingChange('emailAlerts', checked)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="budgetAlerts">{t('budgetAlerts')}</Label>
            <p className="text-sm text-muted-foreground">{t('alertsNearingLimits')}</p>
          </div>
          <Switch
            id="budgetAlerts"
            checked={formState.budgetAlerts}
            onCheckedChange={(checked) => handleSettingChange('budgetAlerts', checked)}
          />
        </div>
      </div>

      {/* Preferences Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium border-b pb-2">{t('preferences')}</h3>
        <div className="grid gap-6">
          {/* Currency Setting */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg transition-all hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Coins className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 space-y-1">
                <Label htmlFor="currency" className="text-base font-medium">
                  {t('currency')}
                </Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Choose your preferred currency for transactions
                </p>
                <Select
                  id="currency"
                  name="currency"
                  value={formState.currency}
                  onChange={handleSelectChange}
                  className="mt-2"
                >
                  <option value="INR">Indian Rupee (₹)</option>
                  <option value="USD">US Dollar ($)</option>
                  <option value="EUR">Euro (€)</option>
                </Select>
              </div>
            </div>
          </div>

          {/* Language Setting */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg transition-all hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 space-y-1">
                <Label htmlFor="language" className="text-base font-medium">
                  {t('language')}
                </Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Select your preferred language
                </p>
                <Select
                  id="language"
                  name="language"
                  value={formState.language}
                  onChange={handleSelectChange}
                  className="mt-2"
                >
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                  <option value="bn">Bengali</option>
                </Select>
              </div>
            </div>
          </div>

          {/* Theme Setting */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg transition-all hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Sun className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1 space-y-1">
                <Label htmlFor="theme" className="text-base font-medium">
                  {t('theme')}
                </Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Choose your preferred appearance
                </p>
                <Select
                  id="theme"
                  name="theme"
                  value={formState.theme}
                  onChange={handleSelectChange}
                  className="mt-2"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </Select>
              </div>
            </div>
          </div>

          {/* Week Start Setting */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg transition-all hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1 space-y-1">
                <Label htmlFor="weekStart" className="text-base font-medium">
                  {t('weekStart')}
                </Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Set your preferred week start day
                </p>
                <Select
                  id="weekStart"
                  name="weekStart"
                  value={formState.weekStart}
                  onChange={handleSelectChange}
                  className="mt-2"
                >
                  <option value="monday">Monday</option>
                  <option value="sunday">Sunday</option>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
      >
        {t('saveChanges')}
      </Button>
    </form>
  )
} 