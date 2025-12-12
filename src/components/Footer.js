import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Portfolio</h3>
            <p>
              Passionate Software Engineer creating amazing digital experiences. 
              Let's build something great together!
            </p>
            <div className="footer-social">
              <a href="#" aria-label="GitHub"><FaGithub /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://wa.me/923001234567" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="/services">Web Development</a></li>
              <li><a href="/services">Mobile Apps</a></li>
              <li><a href="/services">Backend Development</a></li>
              <li><a href="/services">UI/UX Design</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>📧 mr.anasali125@gmail.com</p>
              <p>📱 +92 300 7359924</p>
              <p>📍 Bahawalpur, Pakistan</p>
              <a 
                href="https://wa.me/923001234567?text=Hi! I'd like to discuss a project." 
                className="whatsapp-contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> Quick WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              © 2024 Portfolio. Made with <FaHeart className="heart" /> by Anas Ali
            </p>
            <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;