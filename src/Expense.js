import React, {useContext, useState} from 'react'
import {TransactionContext} from './TransactionContext'

 const Expense = () => {
        let {transactions, addTransaction} = useContext(TransactionContext);
        let [newDesc, setDesc] = useState("")
        let [newAmount, setAmount] = useState(0)
      
        const  additinHandler = (event) => {
            event.preventDefault();
            if(Number(newAmount)=== 0) {
                alert("Please Enter correct value")
                return false;       
            }
            addTransaction({
                    amount: Number(newAmount),
                    desc: newDesc
            })
            setDesc('');
            setAmount(''); 
        }
        const getIncome = () => {
            let income = 0;
            for (var i=0; i < transactions.length; i++ ) {
                if(transactions[i].amount > 0)
                   income += transactions[i].amount
            }
            return income;
        }
        const getExpense = () => {
            let expense = 0;
            for(var i=0; i < transactions.length; i++) {
                if(transactions[i].amount < 0)
                   expense += transactions[i].amount
            }
            return expense;
        }
    return (
        <div className="container">
            <h1 className="header-title">Expense Tracker</h1>
            <h3>Your Balance <br /> {getIncome() + getExpense()} </h3>
            <div className="expense-container">
                <h3>INCOME <br /> {getIncome()}</h3>
                <h3>EXPENSE <br /> {getExpense()} </h3>
            </div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transObj, index) => {
                    return (<li key={index}>
                    <span>{transObj.desc}</span>
                    <span>{transObj.amount}</span>
                    </li>
                )})}
            </ul>
            <h3>Add new tansaction</h3>
            <hr />
            <br />
            <form className="form" onSubmit={additinHandler}>
                <label>Enter Description </label>
                    <input value={newDesc} type="text" onChange={(event)=>setDesc(event.target.value) } required/>
                
                <br />
                <label>Enter Amount </label>
                    <input value={newAmount} type="number" onChange={(event)=>setAmount(event.target.value)} required/>
                
                <br /><br />
                <button className="button"  type="submit" value="Add Transaction" >Add Transaction</button>
            </form>
        </div>
    )
}

export default Expense;