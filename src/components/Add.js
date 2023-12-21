import React from 'react'
import { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Add = () => {
    const[tran,setTran]=useState({type:"",amount:"",tag:""})
    let navigate=useNavigate();


    const fetchuser=async ()=>{
      const response = await fetch("http://localhost:5000/api/auth/getuser", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem('token')
              },
        });
        const json=await response.json();
        localStorage.setItem('name',json.name)
        
        
      }


    useEffect(()=>{
      if(!localStorage.getItem('token'))
      {
        navigate('/login')
      }
      fetchuser();
      // eslint-disable-next-line 
  },[navigate])


    const addtransaction= async (type,amount,tag)=>
    {
        const response = await fetch("http://localhost:5000/api/transaction/addtransaction", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
            body: JSON.stringify({type,amount,tag})
          });
          const json=await response.json()
        //  console.log(json)
          
    }

    

    // const handlehistory=(e)=>{
    //     e.preventDefault();
    //     // history();
    // }

   

    const handleclick=(e)=>{
        e.preventDefault();
        addtransaction(tran.type,tran.amount,tran.tag)
        setTran({type:"",amount:"",tag:""})
    }
    const handlechange=(e)=>
    {
        setTran({...tran,[e.target.name]:e.target.value})
    }
  return (
    <div className=' container mt-3 '>
      <div className="card ">
        <div className="card-body">

        
      <form >
        <div className="mb-3">
        <select className="form-select" name="type" value={tran.type} onChange={handlechange}>
            <option value="">Select Type</option>
            <option value="Savings">Savings</option>
            <option value="Expenses">Expenses</option>
            <option value="Investments">Investments</option>
        </select>
        </div>
      <div className="mb-3">
    <label htmlFor="amount" className="form-label">Amount</label>
    <input type="number" className="form-control" id="amount" name='amount' value={tran.amount} onChange={handlechange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="tag" className="form-control" id="tag" name="tag" value={tran.tag} onChange={handlechange}/>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
  
</form>
</div>
      </div>
    </div>
  )
}

export default Add
