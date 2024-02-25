import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home'

function App() {
  return (
    <div>
    
      <nav className='navBar'>
        <ul className='list'>
          
          <li><Link to="/Home"><button className='header'>Register</button></Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<app />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
