import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
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
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-text">Muhammad Anas Ali</span>
          </Link>
          
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={location.pathname === '/services' ? 'active' : ''}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;