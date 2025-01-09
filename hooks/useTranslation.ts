'use client'

import { useSettings } from '@/contexts/settings-context'
import { translations, TranslationKey } from '@/lib/translations'

export function useTranslation() {
  const { language } = useSettings()
  
  const t = (key: TranslationKey) => {
    return translations[language]?.[key] || translations.en[key]
  }
  
  return { t }
} 