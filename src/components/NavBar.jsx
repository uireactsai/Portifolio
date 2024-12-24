import React, { useState } from 'react'
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
     <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        ☰
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li onClick={() => handleNavClick('hero')}>Home</li>
        <li onClick={() => handleNavClick('about')}>About</li>
        <li onClick={() => handleNavClick('tech')}>Tech Slack</li>
        <li onClick={() => handleNavClick('contact')}>Contact</li>
      </ul>
    </nav>
    </>
    
  )
}

export default NavBar