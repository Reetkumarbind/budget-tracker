"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function BudgetForm() {
  const [budget, setBudget] = useState({
    category: '',
    amount: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Submitting budget:', budget)
    // Reset form
    setBudget({ category: '', amount: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          value={budget.category}
          onChange={(e) => setBudget({ ...budget, category: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="amount">Amount (₹)</Label>
        <Input
          id="amount"
          type="number"
          value={budget.amount}
          onChange={(e) => setBudget({ ...budget, amount: e.target.value })}
          required
        />
      </div>
      <Button type="submit">Add Budget</Button>
    </form>
  )
}

