import React from 'react'
import { Link,useLocation,useNavigate} from 'react-router-dom'
const Navbar = () => {
  let location = useLocation();
  let navigate=useNavigate();
  const handleclick=()=>
    {
      localStorage.removeItem('token');
      navigate('/login')
    }
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark text-light bg-dark">
  <div className="container-fluid">
    <h1>Expense Tracker</h1>
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
      </ul>
      {!localStorage.getItem('token')?<form className='d-flex'>
      <Link className="btn btn-primary mx-1"  to="/login">Login</Link>
      <Link className="btn btn-primary mx-1"  to="/signup">Signup</Link>
      </form >:<>
      <button className="btn btn-primary mx-4 " onClick={handleclick}>Signout</button>
      </>}
        
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
