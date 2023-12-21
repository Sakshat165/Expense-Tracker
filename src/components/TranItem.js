import React from 'react'
import { useState,useEffect} from 'react';
export default function TranItem(props) {
    const{gettran}=props
    
    
    const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-GB');

    

    const [transactions, setTransactions] = useState([]);
    
    
    const deletetransaction=async (id)=>
    {
        const response = await fetch(`http://localhost:5000/api/transaction/deletetransaction/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            }
          });
         const json=await response.json()

         const newTransactions = transactions.filter((transaction) => transaction._id !== id);
         setTransactions(newTransactions);
  };


    
  return (
    <>
     <div className='col-md-3'> 
         <div className="card my-3">
        <div className="card-body">
        <h5 className="card-title" style={{ color: gettran.type === "Savings" ? "green" : (gettran.type === "Investments" ? "gold" : "red") }}>{gettran.type}</h5>
            <p className="card-text">{gettran.amount}</p>
            <p className="card-text">{gettran.tag}</p> 
            <p className="card-text">{formatDate(gettran.date)}</p> 
            <i className="fa-solid fa-trash mx-2" onClick={()=>{deletetransaction(gettran._id)}}/>  
            <i className="fa-solid fa-pen mx-2"/>  
        </div>
        </div> 
        </div>   
         
    </>
  )
}
