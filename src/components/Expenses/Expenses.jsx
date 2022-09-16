import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './styles/Expenses.css';
import ExpensesFilter from '../Expenses/ExpenseFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSelectYear={selectedYearHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
export default Expenses;
