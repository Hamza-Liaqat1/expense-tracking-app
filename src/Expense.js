import React from 'react'

 const Expense = () => {
     let transactions = [ 
        {amount:500, desc: "Cash" },
        {amount:-300, desc: "Book" },
        {amount:-200, desc: "Camera" }

      ]
    return (
        <div className="container">
            <h1 className="header-title">Expense Tracker</h1>
            <h3>Your Balance <br /> $232 </h3>
            <div className="expense-container">
                <h3>INCOME <br /> $444</h3>
                <h3>EXPENSE <br /> $323 </h3>
            </div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transaction, index) => {
                    return (
                <> 
                    <li key={index}>
                    <span>{transaction.desc}</span>
                    <span>{transaction.amount}</span>
                    </li>
                </>
            )})}
            </ul>
            <h3>Add new tansaction</h3>
            <hr />
            <br />
            <form className="form">
                <label>Enter Description </label>
                    <input type="text" required/>
                
                <br />
                <label>Enter Amount </label>
                    <input type="number" required/>
                
                <br /><br />
                <button className="button"  type="submit" value="Add Transaction" >Add Transaction</button>
            </form>
        </div>
    )
}

export default Expense;