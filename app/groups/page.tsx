'use client';

import Button from '@mui/material/Button';
import { fetchUtil } from '@utils/fetch';

export default function Groups() {
  console.log('Groups');

  const handleAddExpense = async () => {
    console.log('Add Expense');

    const expense = {
      description: 'Lunch', // Replace with actual description
      amount: 15.5, // Replace with actual amount
    };

    try {
      const data = await fetchUtil('/api/expense', 'POST', expense);
      console.log('Expense added successfully:', data);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <main className="flex flex-col items-center p-24">
      <div className="">
        <Button variant="contained" onClick={handleAddExpense}>
          Add Expense
        </Button>
      </div>
    </main>
  );
}
