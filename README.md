# React - The Complete Guide Lesson 1 - Expenses Application

```js
  const person = {
    name: 'Dude',
  };

  const secondPerson = {
    ...person,
  };

  person.name = 'bwdave';

  console.log(secondPerson.name); //result in first const object 'Dude'
```

## NewExpense

useState, spread operator, toggle

```js
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
```

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-rwki9x)
