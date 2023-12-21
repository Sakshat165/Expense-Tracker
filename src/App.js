
import Add from './components/Add';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Tran from './components/Tran';
import {
  BrowserRouter,
  Routes,Route
} from "react-router-dom";
import TransactionSummaryPage from './components/TransactionSummary';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Add/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        <Route exact path="/history" element={<Tran/>}></Route>
        <Route exact path="/transactionsummary" element={<TransactionSummaryPage/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
