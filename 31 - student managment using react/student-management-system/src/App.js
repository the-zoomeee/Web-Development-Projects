import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import ContactForm from './components/ContactForm';
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <Router>
      <div>
      <nav style={{ backgroundColor: '#333', padding: '10px 0', marginBottom: '20px' }}>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '20px', margin: 0 }}>
            <li>
              <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
            </li>
            <li>
              <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
            </li>
            <li>
              <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegistrationForm/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
