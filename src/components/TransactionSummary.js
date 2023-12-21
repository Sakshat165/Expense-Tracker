import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import AnalyticsCard from './AnalyticsCard';
import TransactionBarGraph from './TransactionBarGraph';
import AmountBarGraph from './AmountBarGraph';
const TransactionSummary = () => {
  let navigate=useNavigate();
  const [transactions, setTransactions] = useState([]);
  
  
  const fetchTransactions = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/transaction/fetchalltransaction", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      setTransactions(json);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      fetchTransactions()
          
  } else {
      navigate('/login');
  }
  }, [navigate]); // Add an empty dependency array here

  
    const getTotalTransactions = () => {
      return transactions.reduce((total, transaction) => total + parseInt(transaction.amount, 10), 0);
     };

    const getTotalAmount = (transactionType) => {
        return transactions
          .filter(transaction => transaction.type === transactionType)
          .reduce((total, transaction) => total + parseInt(transaction.amount, 10), 0);
      };

      const totalTransaction=transactions
      const totalSavingsTransaction=transactions.filter((transaction)=>transaction.type==="Savings")
      const totalExpensesTransaction=transactions.filter((transaction)=>transaction.type==="Expenses")
      const totalInvestmentsTransaction=transactions.filter((transaction)=>transaction.type==="Investments")
      
     
      
 

  return (
    <>      
   
      <AnalyticsCard savings={totalSavingsTransaction.length} expenses={totalExpensesTransaction.length} investments={totalInvestmentsTransaction.length} transactions={totalTransaction.length}/>
      <div className="container">
      <div className="row">
      <div className='col-md-3'> 
         <div className="card my-3">
        <div className="card-body">
        <h5 className="card-title" style={{"color": "black"}}>Transactions</h5>
            <p className="card-text">₹{getTotalTransactions()}</p>
        </div>
        </div> 
        </div>  
      <div className='col-md-3'> 
         <div className="card my-3">
        <div className="card-body">
        <h5 className="card-title" style={{"color": "green"}}>Savings</h5>
            <p className="card-text">₹{getTotalAmount("Savings")}</p>
        </div>
        </div> 
        </div>  
      <div className='col-md-3'> 
         <div className="card my-3">
        <div className="card-body">
        <h5 className="card-title" style={{"color": "red"}}>Expenses</h5>
            <p className="card-text">₹{getTotalAmount("Expenses")}</p>
        </div>
        </div> 
        </div>  
      <div className='col-md-3'> 
         <div className="card my-3">
        <div className="card-body">
        <h5 className="card-title" style={{"color": "gold"}}>Investments</h5>
            <p className="card-text">₹{getTotalAmount("Investments")}</p>
        </div>
        </div> 
        </div>  
      
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card my-3">
          
          <div className="card-body">
          <TransactionBarGraph
            savings={totalSavingsTransaction}
            expenses={totalExpensesTransaction}
            investments={totalInvestmentsTransaction}
          />
          </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card my-3">
          
          <div className="card-body">
          <AmountBarGraph 
            savings={getTotalAmount("Savings")}
            expenses={getTotalAmount("Expenses")}
            investments={getTotalAmount("Investments")}
          />
          </div>
          </div>
        </div>
      </div>
      
      </div>
      
      
            
</>

  );
};

export default TransactionSummary;
