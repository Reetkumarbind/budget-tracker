'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { 
  IndianRupee, 
  DollarSign,
  EuroSign,
  ArrowDownCircle, 
  ArrowUpCircle,
  Plus,
  Pencil,
  Trash2
} from 'lucide-react'
import { useSettings } from '@/contexts/settings-context'
import { useTranslation } from '@/hooks/useTranslation'
import { TransactionModal } from '@/components/transactions/transaction-modal'
import { Button } from '@/components/ui/button'

// Move this to a separate file later
interface Transaction {
  id: number
  title: string
  amount: number
  date: string
}

const gradientClasses = {
  balance: [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-pink-500 to-rose-600',
    'from-indigo-500 to-purple-600',
    'from-teal-500 to-cyan-600',
    'from-red-500 to-orange-600'
  ],
  income: 'from-green-400 to-emerald-600',
  expense: 'from-red-400 to-rose-600'
}

export default function DashboardPage() {
  const { currency } = useSettings()
  const { t } = useTranslation()
  const [transactions, setTransactions] = React.useState<Transaction[]>([
    { id: 1, title: 'Grocery Shopping', amount: -120.50, date: '2024-03-15' },
    { id: 2, title: 'Salary Deposit', amount: 3500.00, date: '2024-03-01' },
    { id: 3, title: 'Utility Bill', amount: -85.00, date: '2024-03-10' },
  ])
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [editingTransaction, setEditingTransaction] = React.useState<Transaction | null>(null)

  const dashboardData = React.useMemo(() => ({
    totalBalance: transactions.reduce((sum, t) => sum + t.amount, 0),
    monthlyIncome: transactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0),
    monthlyExpenses: Math.abs(transactions.filter(t => t.amount < 0).reduce((sum, t) => sum + t.amount, 0))
  }), [transactions])

  const getCurrencySymbol = () => {
    switch(currency) {
      case 'INR': return '₹'
      case 'USD': return '$'
      case 'EUR': return '€'
      default: return '₹'
    }
  }

  const getCurrencyIcon = () => {
    switch(currency) {
      case 'INR': return <IndianRupee className="h-6 w-6 text-white" />
      case 'USD': return <DollarSign className="h-6 w-6 text-white" />
      case 'EUR': return <EuroSign className="h-6 w-6 text-white" />
      default: return <IndianRupee className="h-6 w-6 text-white" />
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }).format(amount).replace(/^(\D+)/, getCurrencySymbol())
  }

  const handleAddTransaction = (newTransaction: Omit<Transaction, 'id'>) => {
    setTransactions(prev => [...prev, { ...newTransaction, id: Date.now() }])
  }

  const handleEditTransaction = (updatedTransaction: Transaction) => {
    setTransactions(prev => 
      prev.map(t => t.id === updatedTransaction.id ? updatedTransaction : t)
    )
    setEditingTransaction(null)
  }

  const handleDeleteTransaction = (id: number) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      setTransactions(prev => prev.filter(t => t.id !== id))
    }
  }

  // Function to get random gradient
  const getRandomGradient = () => {
    const randomIndex = Math.floor(Math.random() * gradientClasses.balance.length)
    return gradientClasses.balance[randomIndex]
  }

  // Use useMemo to keep the gradient consistent during re-renders
  const currentGradient = React.useMemo(() => getRandomGradient(), [])

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{t('dashboard')}</h1>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Transaction
        </Button>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card 
          className={`p-4 bg-gradient-to-r ${currentGradient} transform hover:scale-105 transition-all duration-200`}
        >
          <div className="flex items-center space-x-2">
            {getCurrencyIcon()}
            <div>
              <p className="text-sm text-white/80">{t('totalBalance')}</p>
              <h2 className="text-2xl font-bold text-white">
                {formatCurrency(dashboardData.totalBalance)}
              </h2>
            </div>
          </div>
        </Card>

        <Card 
          className={`p-4 bg-gradient-to-r ${gradientClasses.income} transform hover:scale-105 transition-all duration-200`}
        >
          <div className="flex items-center space-x-2">
            <ArrowUpCircle className="h-6 w-6 text-white" />
            <div>
              <p className="text-sm text-white/80">{t('monthlyIncome')}</p>
              <h2 className="text-2xl font-bold text-white">
                {formatCurrency(dashboardData.monthlyIncome)}
              </h2>
            </div>
          </div>
        </Card>

        <Card 
          className={`p-4 bg-gradient-to-r ${gradientClasses.expense} transform hover:scale-105 transition-all duration-200`}
        >
          <div className="flex items-center space-x-2">
            <ArrowDownCircle className="h-6 w-6 text-white" />
            <div>
              <p className="text-sm text-white/80">{t('monthlyExpenses')}</p>
              <h2 className="text-2xl font-bold text-white">
                {formatCurrency(dashboardData.monthlyExpenses)}
              </h2>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Transactions */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">{t('recentTransactions')}</h2>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <Card key={transaction.id} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{transaction.title}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className={`font-semibold ${
                    transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingTransaction(transaction)
                        setIsModalOpen(true)
                      }}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Pencil className="h-4 w-4 text-blue-500" />
                    </button>
                    <button
                      onClick={() => handleDeleteTransaction(transaction.id)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <TransactionModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingTransaction(null)
        }}
        onSubmit={editingTransaction ? handleEditTransaction : handleAddTransaction}
        editingTransaction={editingTransaction}
        title={editingTransaction ? 'Edit Transaction' : 'Add Transaction'}
      />
    </div>
  )
}

