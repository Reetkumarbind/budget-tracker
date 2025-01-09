'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface SettingsContextType {
  currency: string
  language: string
  theme: string
  weekStart: string
  notifications: boolean
  emailAlerts: boolean
  budgetAlerts: boolean
  updateSettings: (key: string, value: any) => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState({
    currency: 'INR',
    language: 'en',
    theme: 'light',
    weekStart: 'monday',
    notifications: true,
    emailAlerts: false,
    budgetAlerts: true,
  })

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('budgetAppSettings')
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }
  }, [])

  // Apply theme whenever it changes
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    if (settings.theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      document.documentElement.classList.add(systemTheme)
    } else {
      document.documentElement.classList.add(settings.theme)
    }
  }, [settings.theme])

  const updateSettings = (key: string, value: any) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: value }
      localStorage.setItem('budgetAppSettings', JSON.stringify(newSettings))
      return newSettings
    })
  }

  return (
    <SettingsContext.Provider value={{ ...settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context
} 