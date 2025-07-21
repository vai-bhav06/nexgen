import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">NexGen</div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link></li>
        <li><Link to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link></li>
        <li><Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/signup" onClick={() => setMenuOpen(false)}>
          <button className="signup-btn">Signup</button>
        </Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
