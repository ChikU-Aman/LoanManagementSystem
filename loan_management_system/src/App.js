import logo from './logo.svg';
import './App.css';
import LedgerGrid from './components/LedgerGrid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleLoanLedger from './components/SingleLoanLedger';


function App() {

  return (
   
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LedgerGrid/>}></Route>
      <Route path="/Ledger" element={<SingleLoanLedger/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
