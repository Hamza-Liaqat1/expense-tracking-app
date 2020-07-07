import React from 'react';
import './App.css';
import Expense from './Expense'
import {TransactionProvider} from './TransactionContext'


function App() {
  return (
    <TransactionProvider>
      <Expense />
      </TransactionProvider>
  );
}

export default App;
