import { useState } from 'react';
import './App.css'
import Hero from './components/Hero';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';

function App() {
  
  return (
    <div>
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<div>Error: 404</div>} />
      </Routes>
    </div>
  </Router>
  </div>
  )
}

export default App
