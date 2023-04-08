import React, { useState } from 'react';
import './Nav.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">Elliots Barber Shop</div>
      <button className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="menu-btn__burger"></span>
      </button>
      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Location</a></li>
      </ul>
    </header>
  );
}

export default Nav;
