import React from 'react'
import { useState,useEffect } from 'react';
import TranItem from './TranItem';
import { useNavigate } from 'react-router-dom';



const Tran = () => {
    let navigate=useNavigate();
    const t1=[]

    const [gettran,setgettran]=useState(t1);
    const history=async ()=>
    {
        const response = await fetch("http://localhost:5000/api/transaction/fetchalltransaction", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token":localStorage.getItem('token')
            },
          });
          const json=await response.json()
          setgettran(json)
          
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            history()
                .finally(() => setLoading(false));
        } else {
            navigate('/login');
        }
        // eslint-disable-next-line
    }, [history,navigate]);
    
    
       
  return (
     <div className='container'>
        <div className="row my-3">
            <center><h2>History</h2></center>
            <select className="form-select" name="type">
            <option value="">Select Frequency</option>
            <option value="7">1 Week</option>
            <option value="31">1 Month</option>
            <option value="365">1 year</option>
        </select>
            {loading ? (
                <center><i className="fa-solid fa-spinner"></i></center>
            ) : (
                gettran.map((tran) => (
                    <TranItem key={tran._id} gettran={tran}/>
                ))
            )}
        </div>
    </div>
  )
}

export default Tran
