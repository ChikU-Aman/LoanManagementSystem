import logo from './logo.svg';
import './App.css';
import AuthenticationService from './Service/AuthenticationService';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import BGImage from './components/BGImage';
import CustomerDetails from './components/CustomerDetails';
import ViewCustomers from './components/ViewCustomers';



function App() {

  const login = (username) => {
    AuthenticationService.login(username)
  }

  const logout = () => {
    AuthenticationService.logout()
  }
  return (
    <Main>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login login={login} />}></Route>
          <Route path="bgimage" element={<BGImage />}></Route>
          <Route path="customerdetails" element={<CustomerDetails />}></Route>
          <Route path="viewcustomers" element={<ViewCustomers />}></Route>
        </Routes>
      </BrowserRouter>
    </Main>
  );
}

export default App;
