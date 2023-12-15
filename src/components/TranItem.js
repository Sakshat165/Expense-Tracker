import React, { useEffect } from 'react'
import { useState } from 'react';
export default function TranItem(props) {
    const{gettran}=props
    
    const n1=[]

    const [notes,setNotes]=useState(n1);

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

        const newNotes=notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
    }
  return (
    <>
     <div className='col-md-3'> 
         <div className="card my-3">
        <div className="card-body">
            <h5 className="card-title">{gettran.type}</h5>
            <p className="card-text">{gettran.amount}</p>
            <p className="card-text">{gettran.tag}</p> 
            <i className="fa-solid fa-trash mx-2" onClick={()=>{deletetransaction(gettran._id)}}/>  
            <i className="fa-solid fa-pen mx-2"/>  
        </div>
        </div> 
        </div>     
    
    </>
  )
}
