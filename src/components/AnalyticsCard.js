import React from 'react'

const AnalyticsCard = (props) => {
  return (
    <>
    <div className="container d-flex justify-content-center">
         <div className="card my-3">
        <div className="card-header">Total Transactions: {!props.transactions?0:props.transactions}</div>
        <div className="card-body" >
           <h5>Savings: {!props.savings?0:props.savings}</h5>
            <h5>Expenses: {!props.expenses?0:props.expenses}</h5>
            <h5>Investments: {!props.investments?0:props.investments}</h5>
        </div> 
        </div> 
        </div>  
    </>
  )
}

export default AnalyticsCard
