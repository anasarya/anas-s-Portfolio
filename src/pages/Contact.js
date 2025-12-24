import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaGithub, FaPaperPlane, FaInstagram, FaStar } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [reviewData, setReviewData] = useState({
    name: '',
    email: '',
    rating: 5,
    description: ''
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Ahmed Khan",
      rating: 5,
      description: "Excellent work! Delivered the project on time with amazing quality. Very professional and skilled developer."
    },
    {
      id: 2,
      name: "Sarah Ali",
      rating: 5,
      description: "Very professional and skilled developer. Highly recommended! Great communication throughout the project."
    },
    {
      id: 3,
      name: "Hassan Ahmed",
      rating: 5,
      description: "Great communication and technical expertise. Will work again! Outstanding results and timely delivery."
    }
  ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm ${formData.name}%0A%0ASubject: ${formData.subject}%0A%0AMessage: ${formData.message}%0A%0AEmail: ${formData.email}`;
    const whatsappURL = `https://wa.me/923007359924?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const emailSubject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const emailBody = encodeURIComponent(`Hi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const emailURL = `mailto:mr.anasali125@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = emailURL;
  };

  const handleReviewChange = (e) => {
    setReviewData({
      ...reviewData,
      [e.target.name]: e.target.value
    });
  };

  const sendReviewNotification = (reviewData) => {
    // Create email notification
    const subject = encodeURIComponent('New Client Review Received - Portfolio Website');
    const stars = '⭐'.repeat(reviewData.rating);
    const emailBody = encodeURIComponent(`
New Review Notification
=======================

Client Details:
- Name: ${reviewData.name}
- Email: ${reviewData.email}
- Rating: ${stars} (${reviewData.rating}/5)

Review:
"${reviewData.description}"

---
This notification was sent automatically from your portfolio website.
    `);
    
    // Create WhatsApp notification message
    const whatsappMessage = `[!] *New Review Alert!*%0A%0A[User] *Client:* ${reviewData.name}%0A[Email] *Email:* ${reviewData.email}%0A${stars} *Rating:* ${reviewData.rating}/5%0A%0A[Message] *Review:*%0A"${reviewData.description}"%0A%0A----%0APortfolio Website Notification`;
    
    // Send both email and WhatsApp notifications
    const emailURL = `mailto:mr.anasali125@gmail.com?subject=${subject}&body=${emailBody}`;
    const whatsappURL = `https://wa.me/923007359924?text=${whatsappMessage}`;
    
    // Open email client
    window.open(emailURL, '_blank');
    
    // Also send WhatsApp notification after a short delay
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
    }, 1000);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (reviewData.name && reviewData.email && reviewData.description) {
      const newReview = {
        id: reviews.length + 1,
        name: reviewData.name,
        rating: parseInt(reviewData.rating),
        description: reviewData.description
      };
      
      // Add review to state
      setReviews([...reviews, newReview]);
      
      // Send email notification
      sendReviewNotification(reviewData);
      
      // Reset form
      setReviewData({
        name: '',
        email: '',
        rating: 5,
        description: ''
      });
      
      alert('Thank you for your review! It has been added successfully and an email notification has been sent.');
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "+92 300 7359924",
      link: "tel:+923007359924"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "mr.anasali125@gmail.com",
      link: "mailto:mr.anasali125@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      info: "Bahawalpur, Pakistan",
      link: "#"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      info: "+92 300 7359924",
      link: "https://wa.me/923007359924"
    }
  ];

  return (
    <div className="contact">
      <div className="container">
        {/* Contact Hero */}
        <section className="contact-hero section">
          <motion.div 
            className="hero-content text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title">Get In Touch</h1>
            <p className="hero-description">
              Ready to start your project? Let's discuss your ideas and create something amazing together. 
              I'm always excited to work on new challenges and help bring your vision to life.
            </p>
          </motion.div>
        </section>

        {/* Contact Content */}
        <section className="contact-content section">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card">
                <h2>Send Message</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="form-buttons">
                    <button type="submit" className="btn btn-primary">
                      <FaWhatsapp /> Send via WhatsApp
                    </button>
                    <button type="button" onClick={handleEmailSubmit} className="btn btn-secondary">
                      <FaPaperPlane /> Send Email
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Feel free to reach out through any of these channels. I'm always happy to discuss new opportunities and projects.</p>
                
                <div className="contact-methods">
                  {contactInfo.map((item, index) => (
                    <motion.a 
                      key={index}
                      href={item.link}
                      className="contact-item"
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="contact-icon">
                        {item.icon}
                      </div>
                      <div className="contact-details">
                        <h4>{item.title}</h4>
                        <p>{item.info}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="social-section">
                  <h3>Follow Me</h3>
                  <div className="social-links">
                    <a href="https://github.com/anasarya" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/anas-ali-42a890309/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/maybee_anas" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                      <FaInstagram />
                    </a>
                    <a href="https://wa.me/923007359924" className="social-link whatsapp" aria-label="WhatsApp">
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="quick-contact section">
          <motion.div 
            className="quick-contact-content card text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Need Quick Help?</h2>
            <p>For urgent inquiries or quick questions, reach out directly via WhatsApp!</p>
            <a 
              href="https://wa.me/923007359924?text=Hi! I need help with my project." 
              className="btn btn-primary whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </motion.div>
        </section>

        {/* Client Reviews Section */}
        <section className="reviews-section section">
          <div className="reviews-grid">
            {/* Review Submission Form */}
            <motion.div 
              className="review-form-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card">
                <h2>Leave a Review</h2>
                <p>Share your experience working with me</p>
                <form className="review-form" onSubmit={handleReviewSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={reviewData.name}
                      onChange={handleReviewChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={reviewData.email}
                      onChange={handleReviewChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Rating:</label>
                    <div className="rating-input">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <label key={star} className="star-label">
                          <input
                            type="radio"
                            name="rating"
                            value={star}
                            checked={reviewData.rating === star}
                            onChange={handleReviewChange}
                          />
                          <FaStar className={`star-icon ${reviewData.rating >= star ? 'active' : ''}`} />
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="description"
                      placeholder="Your Review *"
                      rows="4"
                      value={reviewData.description}
                      onChange={handleReviewChange}
                      required
                    ></textarea>
                  </div>
                  <div className="notification-info">
                    <p className="notification-text">
                      [Email] When you submit this review, I'll receive an instant notification via email and WhatsApp.
                    </p>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit Review
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Display Reviews */}
            <motion.div 
              className="reviews-display-section"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Client Reviews</h2>
              <div className="reviews-list">
                {reviews.map((review, index) => (
                  <motion.div 
                    key={review.id}
                    className="review-item card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="review-header">
                      <h4>{review.name}</h4>
                      <div className="review-rating">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="star-icon active" />
                        ))}
                      </div>
                    </div>
                    <p className="review-description">"{review.description}"</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="faq-grid">
            <motion.div 
              className="faq-item card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3>How long does a typical project take?</h3>
              <p>Project timelines vary based on complexity. A simple website takes 1-2 weeks, while complex applications can take 4-8 weeks.</p>
            </motion.div>
            <motion.div 
              className="faq-item card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Do you provide ongoing support?</h3>
              <p>Yes! I offer post-launch support and maintenance packages to keep your application running smoothly.</p>
            </motion.div>
            <motion.div 
              className="faq-item card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3>What's your payment structure?</h3>
              <p>I typically work with 50% upfront and 50% on completion. For larger projects, we can discuss milestone-based payments.</p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;