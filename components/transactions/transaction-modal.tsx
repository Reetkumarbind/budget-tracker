'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { X } from 'lucide-react'

interface TransactionModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (transaction: any) => void
  editingTransaction?: any
  title: string
}

export function TransactionModal({ 
  isOpen, 
  onClose, 
  onSubmit, 
  editingTransaction,
  title 
}: TransactionModalProps) {
  const [formData, setFormData] = React.useState({
    title: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    ...editingTransaction
  })

  React.useEffect(() => {
    if (editingTransaction) {
      setFormData({
        ...editingTransaction,
        amount: Math.abs(editingTransaction.amount).toString(),
        date: editingTransaction.date
      })
    }
  }, [editingTransaction])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      amount: parseFloat(formData.amount) * (formData.type === 'expense' ? -1 : 1)
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-semibold mb-4">{title}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <Label htmlFor="type">Type</Label>
            <select
              id="type"
              value={formData.amount < 0 ? 'expense' : 'income'}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              required
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <div>
            <Label htmlFor="amount">Amount</Label>
            <input
              type="number"
              id="amount"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              min="0"
              step="0.01"
              required
            />
          </div>

          <div>
            <Label htmlFor="date">Date</Label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            {editingTransaction ? 'Update' : 'Add'} Transaction
          </Button>
        </form>
      </div>
    </div>
  )
} 