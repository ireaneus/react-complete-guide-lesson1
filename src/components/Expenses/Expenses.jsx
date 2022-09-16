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
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        edate={props.items[0].edate}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        edate={props.items[1].edate}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        edate={props.items[2].edate}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        edate={props.items[3].edate}
      />
    </Card>
  );
}
export default Expenses;
