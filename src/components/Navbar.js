import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    // Scroll to top when menu item is clicked
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-container">
              <FaCode className="logo-icon" />
              <span className="logo-text">Anas Ali</span>
              <div className="logo-dot"></div>
            </div>
          </Link>
          
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="nav-text">Home</span>
              <div className="nav-bg"></div>
            </Link>
            <Link 
              to="/about" 
              className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="nav-text">About</span>
              <div className="nav-bg"></div>
            </Link>
            <Link 
              to="/services" 
              className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="nav-text">Services</span>
              <div className="nav-bg"></div>
            </Link>
            <Link 
              to="/contact" 
              className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="nav-text">Contact</span>
              <div className="nav-bg"></div>
            </Link>
          </div>

          <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;