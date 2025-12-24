import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaDownload, FaCode, FaMobile, FaDatabase } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern design and secure payment integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/anasarya/Tech-Solutions-",
      live: "https://zdescargas.vip/"
    },
    {
      id: 2,
      title: "Task Management Form",
      description: "Modern task management form with real-time updates and team collaboration",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/anasarya/Multi-Step-Form",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts and interactive maps",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/anasarya/Weather-App-using-API",
      live: "#"
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "Modern restaurant website with online ordering system and table reservations",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design and smooth animations",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/anasarya/anas-s-Portfolio",
      live: "#"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with video calling and file sharing features",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/anasarya/real-time-chat-Frontend-with-comon-conversation-",
      live: "#"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Ahmed Khan",
      role: "CEO, TechStart",
      review: "Excellent work! Delivered the project on time with amazing quality.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Sarah Ali",
      role: "Product Manager",
      review: "Very professional and skilled developer. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Hassan Ahmed",
      role: "Startup Founder",
      review: "Great communication and technical expertise. Will work again!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Maria Khan",
      role: "Marketing Director",
      review: "Outstanding developer! Created exactly what we needed for our business.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "Ali Raza",
      role: "Tech Lead",
      review: "Anas delivered high-quality code and excellent user experience.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 6,
      name: "Fatima Sheikh",
      role: "Business Owner",
      review: "Professional, reliable, and delivers on time. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>
                Hi, I'm <span className="text-gradient">Anas Ali</span>
              </h1>
              <h2>Software Engineer</h2>
              <p>
                I create amazing web applications and mobile solutions that help businesses grow. 
                Passionate about clean code, user experience, and innovative technologies.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Hire Me
                </Link>
                <a href="#" className="btn btn-secondary">
                  <FaDownload /> Download CV
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/anasarya" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/anas-ali-42a890309/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://www.instagram.com/maybee_anasaur" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://www.facebook.com/profile.php?id=100010716971266" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="image-container">
                <img 
                  src="/images/anas-ali.jpg" 
                  alt="Anas Ali - Software Engineer"
                />
                <div className="image-bg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="what-i-do section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What I Do
          </motion.h2>
          
          {/* Moving Services Container */}
          <div className="moving-services-container">
            <div className="moving-services">
              {/* First Set */}
              <div className="service-item">
                <FaCode className="service-icon" />
                <span>Web Development</span>
              </div>
              <div className="service-item">
                <FaMobile className="service-icon" />
                <span>Mobile Apps</span>
              </div>
              <div className="service-item">
                <FaDatabase className="service-icon" />
                <span>Backend Development</span>
              </div>
              <div className="service-item">
                <FaCode className="service-icon" />
                <span>Frontend Design</span>
              </div>
              <div className="service-item">
                <FaMobile className="service-icon" />
                <span>React Native</span>
              </div>
              <div className="service-item">
                <FaDatabase className="service-icon" />
                <span>API Development</span>
              </div>
              
              {/* Duplicate Set for Seamless Loop */}
              <div className="service-item">
                <FaCode className="service-icon" />
                <span>Web Development</span>
              </div>
              <div className="service-item">
                <FaMobile className="service-icon" />
                <span>Mobile Apps</span>
              </div>
              <div className="service-item">
                <FaDatabase className="service-icon" />
                <span>Backend Development</span>
              </div>
              <div className="service-item">
                <FaCode className="service-icon" />
                <span>Frontend Design</span>
              </div>
              <div className="service-item">
                <FaMobile className="service-icon" />
                <span>React Native</span>
              </div>
              <div className="service-item">
                <FaDatabase className="service-icon" />
                <span>API Development</span>
              </div>
            </div>
          </div>

          {/* Detailed Services Grid */}
          <div className="detailed-services">
            <motion.div 
              className="service-detail-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FaCode className="detail-icon" />
              <h3>Web Development</h3>
              <p>Creating responsive and modern web applications using React, JavaScript, and latest technologies for optimal user experience.</p>
            </motion.div>
            
            <motion.div 
              className="service-detail-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaMobile className="detail-icon" />
              <h3>Mobile Development</h3>
              <p>Building cross-platform mobile applications with React Native and modern mobile technologies for iOS and Android.</p>
            </motion.div>
            
            <motion.div 
              className="service-detail-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FaDatabase className="detail-icon" />
              <h3>Backend Development</h3>
              <p>Developing robust APIs and server-side applications with Node.js, Express, and databases for scalable solutions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-3">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="project-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <a href={project.github} className="project-link">GitHub</a>
                    <a href={project.live} className="project-link">Live Demo</a>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Me?
          </motion.h2>
          <div className="grid grid-2">
            <motion.div 
              className="choose-card card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="choose-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround times without compromising on quality. Your project will be delivered on time, every time.</p>
            </motion.div>
            
            <motion.div 
              className="choose-card card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="choose-icon">💡</div>
              <h3>Modern Solutions</h3>
              <p>Using the latest technologies and best practices to create cutting-edge applications that stand out.</p>
            </motion.div>
            
            <motion.div 
              className="choose-card card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="choose-icon">●</div>
              <h3>Client-Focused</h3>
              <p>Your success is my priority. I work closely with you to understand your needs and exceed expectations.</p>
            </motion.div>
            
            <motion.div 
              className="choose-card card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="choose-icon">⚙</div>
              <h3>24/7 Support</h3>
              <p>Ongoing support and maintenance to ensure your application runs smoothly long after launch.</p>
            </motion.div>
            
            <motion.div 
              className="choose-card card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="choose-icon">$</div>
              <h3>Competitive Pricing</h3>
              <p>High-quality development services at affordable rates. Great value for your investment.</p>
            </motion.div>
            
            <motion.div 
              className="choose-card card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="choose-icon">★</div>
              <h3>Proven Track Record</h3>
              <p>50+ successful projects and 30+ satisfied clients speak for the quality of work delivered.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Client Reviews
          </motion.h2>
          <div className="grid grid-3">
            {reviews.map((review, index) => (
              <motion.div 
                key={review.id}
                className="review-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="review-header">
                  <img src={review.avatar} alt={review.name} className="review-avatar" />
                  <div>
                    <h4>{review.name}</h4>
                    <p className="review-role">{review.role}</p>
                  </div>
                </div>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="review-text">"{review.review}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;