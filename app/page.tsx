'use client'

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 relative">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(45deg, 
              rgba(17, 24, 39, 1), 
              rgba(88, 28, 135, 0.8), 
              rgba(124, 58, 237, 0.7)
            )`
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
          <div className="text-center max-w-3xl mx-auto animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              {t('welcome')}
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90">
              {t('tagline')}
            </p>
            <Link 
              href="/dashboard" 
              className="inline-flex items-center px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('goDashboard')}
            </Link>
          </div>

          {/* Optional: Add some decorative elements */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4 text-white/60">
            <div className="text-center">
              <div className="text-3xl font-bold">✓</div>
              <div className="text-sm">Easy Tracking</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">📊</div>
              <div className="text-sm">Clear Insights</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">🎯</div>
              <div className="text-sm">Smart Goals</div>
          

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
