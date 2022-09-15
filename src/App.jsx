import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './styles/App.css';
import Expenses from './components/Features/Expenses';

function App() {
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

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Expenses items={expenses} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
