import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { Link,useLocation,useNavigate} from 'react-router-dom'
const Navbar = () => {
  const [userName, setUserName] =  useState("");

  const fetchUserName = async () => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setUserName(storedName);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      await fetchUserName();
    };

    fetchData();
  }, [userName]);

  let location = useLocation();
  let navigate=useNavigate();
  const handleclick=()=>
    {
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      navigate('/login')
    }
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark">
  <div className="container-fluid">
    <h1>Expense Tracker</h1>
    <img src={logo} alt="Logo" className="me-2" style={{ height: '50px', width: '50px' }} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-2">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Add New</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/history"?"active":""}`} to="/history">History</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/transactionsummary"?"active":""}`} to="/transactionsummary">Summary</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?<form className='d-flex'>
      <Link className="btn btn-primary mx-1"  to="/login">Login</Link>
      <Link className="btn btn-primary mx-1"  to="/signup">Signup</Link>
      </form >:<>
     <i className="fa-solid fa-user"  style={{color: "#1160e8"}}> {userName}</i>
      <button className="btn btn-primary mx-4 " onClick={handleclick}>Signout</button>
      </>}
        
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
