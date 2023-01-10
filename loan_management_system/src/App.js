import logo from './logo.svg';
import './App.css';
import LedgerGrid from './components/LedgerGrid';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SingleLoanLedger from './components/SingleLoanLedger';


function App() {

  return (
   
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light navbar-neavy-blue">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Ledger List</Link>
      </li>
    </ul>
  </div>
</nav>
      <Routes>
      <Route path="/" element={<LedgerGrid/>}></Route>
      <Route path="/Ledger" element={<SingleLoanLedger/>}></Route>
      </Routes>
      <div className="fixed-bottom footer-copyright">
        <div className="footer-copyright-wrapper">
          <p className="footer-copyright-text">
            <a className="footer-copyright-link" href="#" target="_self"> ©2020. | Designed By: Pooja Nahelia. | All rights reserved. </a>
          </p>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
