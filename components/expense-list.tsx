import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// This would typically come from your backend
const expenses = [
  { id: 1, category: 'Food', amount: 5000, date: '2023-07-01' },
  { id: 2, category: 'Rent', amount: 25000, date: '2023-07-01' },
  { id: 3, category: 'Entertainment', amount: 3000, date: '2023-07-02' },
]

export function ExpenseList() {
  return (
    <Table className="bg-white dark:bg-gray-800">
      <TableHeader className="bg-gray-50 dark:bg-gray-700">
        <TableRow>
          <TableHead className="dark:text-gray-300">Category</TableHead>
          <TableHead className="dark:text-gray-300">Amount</TableHead>
          <TableHead className="dark:text-gray-300">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell className="dark:text-gray-300">{expense.category}</TableCell>
            <TableCell className="dark:text-gray-300">₹{expense.amount.toFixed(2)}</TableCell>
            <TableCell className="dark:text-gray-300">{expense.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

