import React, { useState } from 'react';
import Card from '../UI/Card';
import './styles/Expenses.css';
import ExpensesFilter from '../Expenses/ExpenseFilter';
import ExpensesList from '../Expenses/ExpensesList';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
  
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={selectedYearHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>

  );
}
export default Expenses;
