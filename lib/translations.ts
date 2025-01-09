export const translations = {
  en: {
    // Navigation
    dashboard: "Dashboard",
    settings: "Settings",
    
    // Home page
    welcome: "Welcome to Budget Tracker",
    tagline: "Take control of your finances today",
    goDashboard: "Go to Dashboard",
    
    // Dashboard
    totalBalance: "Total Balance",
    monthlyIncome: "Monthly Income",
    monthlyExpenses: "Monthly Expenses",
    recentTransactions: "Recent Transactions",
    
    // Settings
    preferences: "Preferences",
    notifications: "Notifications",
    pushNotifications: "Push Notifications",
    emailAlerts: "Email Alerts",
    budgetAlerts: "Budget Alerts",
    currency: "Currency",
    language: "Language",
    theme: "Theme",
    weekStart: "Week Starts On",
    saveChanges: "Save Changes",
    notifyBudgetUpdates: "Get notified about budget updates",
    receiveBudgetReports: "Receive budget reports via email",
    alertsNearingLimits: "Get alerts when nearing budget limits"
  },
  hi: {
    // Navigation
    dashboard: "डैशबोर्ड",
    settings: "सेटिंग्स",
    
    // Home page
    welcome: "बजट ट्रैकर में आपका स्वागत है",
    tagline: "आज ही अपनी वित्तीय स्थिति को नियंत्रित करें",
    goDashboard: "डैशबोर्ड पर जाएं",
    
    // Dashboard
    totalBalance: "कुल बैलेंस",
    monthlyIncome: "मासिक आय",
    monthlyExpenses: "मासिक खर्च",
    recentTransactions: "हाल के लेनदेन",
    
    // Settings
    preferences: "प्राथमिकताएं",
    notifications: "सूचनाएं",
    pushNotifications: "पुश नोटिफिकेशन",
    emailAlerts: "ईमेल अलर्ट",
    budgetAlerts: "बजट अलर्ट",
    currency: "मुद्रा",
    language: "भाषा",
    theme: "थीम",
    weekStart: "सप्ताह की शुरुआत",
    saveChanges: "परिवर्तन सहेजें",
    notifyBudgetUpdates: "बजट अपडेट के बारे में सूचित करें",
    receiveBudgetReports: "ईमेल द्वारा बजट रिपोर्ट प्राप्त करें",
    alertsNearingLimits: "सीमा के करीब पहुंचने पर अलर्ट प्राप्त करें"
  },
  bn: {
    // Navigation
    dashboard: "ড্যাশবোর্ড",
    settings: "সেটিংস",
    
    // Home page
    welcome: "বাজেট ট্র্যাকারে স্বাগতম",
    tagline: "আজই আপনার আর্থিক অবস্থা নিয়ন্ত্রণ করুন",
    goDashboard: "ড্যাশবোর্ডে যান",
    
    // Dashboard
    totalBalance: "মোট ব্যালেন্স",
    monthlyIncome: "মাসিক আয়",
    monthlyExpenses: "মাসিক খরচ",
    recentTransactions: "সাম্প্রতিক লেনদেন",
    
    // Settings
    preferences: "পছন্দসমূহ",
    notifications: "বিজ্ঞপ্তি",
    pushNotifications: "পুশ নোটিফিকেশন",
    emailAlerts: "ইমেইল অ্যালার্ট",
    budgetAlerts: "বাজেট অ্যালার্ট",
    currency: "মুদ্রা",
    language: "ভাষা",
    theme: "থিম",
    weekStart: "সপ্তাহের শুরু",
    saveChanges: "পরিবর্তন সংরক্ষণ করুন",
    notifyBudgetUpdates: "বাজেট আপডেট সম্পর্কে জানুন",
    receiveBudgetReports: "ইমেইলে বাজেট রিপোর্ট পান",
    alertsNearingLimits: "সীমার কাছাকাছি পৌঁছালে অ্যালার্ট পান"
  }
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en 