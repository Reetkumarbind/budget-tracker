'use client'

import Link from 'next/link'
import { PieChart, DollarSign, Settings } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

export function MainNav() {
  const { t } = useTranslation()

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <DollarSign className="h-8 w-8 text-blue-400" />
            <span className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Reet Budget Tracker
            </span>
          </Link>
          
          <div className="flex space-x-4">
            <Link 
              href="/dashboard" 
              className="flex items-center space-x-1 px-4 py-2 rounded-md text-gray-100 hover:bg-gray-700 transition-colors duration-200"
            >
              <PieChart className="h-5 w-5 text-blue-400" />
              <span>{t('dashboard')}</span>
            </Link>
            <Link 
              href="/settings" 
              className="flex items-center space-x-1 px-4 py-2 rounded-md text-gray-100 hover:bg-gray-700 transition-colors duration-200"
            >
              <Settings className="h-5 w-5 text-blue-400" />
              <span>{t('settings')}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 