import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './styles/ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluated by React');

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate edate={props.edate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;