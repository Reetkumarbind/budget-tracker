import Link from 'next/link'
import { Home, DollarSign, PieChart } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Budget Planner</h1>
      </div>
      <nav className="mt-6">
        <Link href="/dashboard" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
          <Home className="inline-block mr-2" size={18} />
          Dashboard
        </Link>
        <Link href="/dashboard/budgets" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
          <DollarSign className="inline-block mr-2" size={18} />
          Budgets
        </Link>
        <Link href="/dashboard/expenses" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
          <PieChart className="inline-block mr-2" size={18} />
          Expenses
        </Link>
      </nav>
    </aside>
  )
}

