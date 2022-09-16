import React, { useState } from 'react';
import './styles/App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Payment',
    amount: 294.76,
    date: new Date(2017, 11, 8),
  },
  {
    id: 'e2',
    title: 'Mortgage',
    amount: 1921.55,
    date: new Date(2022, 8, 2),
  },
  {
    id: 'e3',
    title: 'Amazon',
    amount: 300.22,
    date: new Date(2015, 1, 4),
  },
  {
    id: 'e4',
    title: 'Lowes',
    amount: 119.75,
    date: new Date(2021, 5, 15),
  },
];

export default function App() {
  const [count, setCount] = useState(0);
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}
