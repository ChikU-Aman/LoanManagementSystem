import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-circular-progressbar/dist/styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-6">
          <Header />
          <ContactForm />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
