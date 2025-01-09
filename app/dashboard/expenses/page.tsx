import { ExpenseForm } from '../../components/expense-form'
import { ExpenseList } from '../../components/expense-list'

export default function Expenses() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Expenses</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Add New Expense</h2>
        <ExpenseForm />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Recent Expenses</h2>
        <ExpenseList />
      </div>
    </div>
  )
}

