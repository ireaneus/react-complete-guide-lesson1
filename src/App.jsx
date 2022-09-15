import { useState } from 'react';
import './styles/App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

export default function App() {
  const [count, setCount] = useState(0);

  const expenses = [
    {
      id: 'e1',
      title: 'Car Payment',
      amount: 294.76,
      edate: new Date(2017, 11, 8),
    },
    {
      id: 'e2',
      title: 'Mortgage',
      amount: 1921.55,
      edate: new Date(2022, 8, 2),
    },
    {
      id: 'e3',
      title: 'Amazon',
      amount: 300.22,
      edate: new Date(2015, 1, 4),
    },
    {
      id: 'e4',
      title: 'Lowes',
      amount: 119.75,
      edate: new Date(2021, 5, 15),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
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
