import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPlus, FaTimes } from 'react-icons/fa';
import './FloatingContacts.css';

const FloatingContacts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Hi Anas! I'm interested in your services. Can we discuss my project?";
    const whatsappURL = `https://wa.me/923007359924?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleEmailClick = () => {
    const subject = "Project Inquiry - Portfolio Website";
    const body = "Hi Anas,\n\nI visited your portfolio website and I'm interested in your services.\n\nCould we discuss my project requirements?\n\nBest regards,";
    const emailURL = `mailto:mr.anasali125@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailURL;
  };

  return (
    <>
      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              className="floating-contact-btn whatsapp"
              onClick={handleWhatsAppClick}
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ x: -8, scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              style={{ top: '60%', right: '70px' }}
            >
              <FaWhatsapp />
              <span className="contact-tooltip">WhatsApp</span>
            </motion.button>

            <motion.button
              className="floating-contact-btn email"
              onClick={handleEmailClick}
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ x: -8, scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              style={{ top: '70%', right: '70px' }}
            >
              <FaEnvelope />
              <span className="contact-tooltip">Email</span>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        className={`floating-contacts-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: -10 }}
        whileTap={{ scale: 0.95 }}
        title={isOpen ? "Close Contact Options" : "Contact Me"}
      >
        <div className="contact-icon">
          {isOpen ? <FaTimes /> : <FaPlus />}
        </div>
        <span className="contact-text">CONTACT</span>
        {!isOpen && <span className="contact-notification-badge">📞</span>}
      </motion.button>
    </>
  );
};

export default FloatingContacts;