import { useState } from 'react';
import './App.css'
import Hero from './components/Hero';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Home from './components/pages/Home';
import Main from './components/pages/Main';

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="*" element={<div>Error:404 Web Page Not Found</div>} />
      </Routes>
  </Router>
  </>
  )
}

export default App
