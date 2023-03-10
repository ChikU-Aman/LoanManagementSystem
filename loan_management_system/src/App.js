import './App.css';
//import CibilCheck from './cibil/CibilCheck';
import Signup from './cibil/Signup';
import { Container } from 'reactstrap';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Dashboard } from './cibil/Dashboard';
import Login from "./cibil/Login";
import ForgotPassword from './cibil/ForgotPassword';
import UpdateProfile from './cibil/UpdateProfile';
import Base from './cibil/Home';
import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import CibilCheck from './cibil/CibilCheck';

const App = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const handleSubmit = () => {
    console.log('form submitted ✅');
  };

  useEffect(() => {
    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'Enter') {
        event.preventDefault();

        //  call submit function here
        handleSubmit();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div>
      {/* <div className="App">
        <CibilCheck />
      </div> */}
      <Base>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Router>
              <AuthProvider>
                <Routes>
                  <Route exact path='/' element={<Dashboard />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/update-profile" element={<UpdateProfile />} />
                  <Route path="/cibil" element={<CibilCheck />} />
                
                </Routes>
              </AuthProvider>
            </Router>
          </div>
        </Container>
      </Base>
    </div>
  );
};

export default App;


