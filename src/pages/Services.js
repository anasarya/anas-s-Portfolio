import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaDatabase, FaCloud, FaSearch, FaPaintBrush, FaRocket, FaCog } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Node.js, and Express. Responsive, fast, and user-friendly.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "SEO Friendly"]
    },
    {
      id: 2,
      icon: <FaMobile />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native. Native performance with code reusability across iOS and Android.",
      features: ["Cross-platform", "Native Performance", "App Store Deployment", "Push Notifications"]
    },
    {
      id: 3,
      icon: <FaDatabase />,
      title: "Backend Development",
      description: "Robust server-side applications and APIs. Database design, authentication, and scalable architecture solutions.",
      features: ["RESTful APIs", "Database Design", "Authentication", "Cloud Integration"]
    },
    {
      id: 4,
      icon: <FaCloud />,
      title: "Cloud Deployment",
      description: "Deploy your applications to cloud platforms like AWS, Vercel, and Heroku. Scalable and reliable hosting solutions.",
      features: ["AWS Deployment", "CI/CD Pipeline", "Domain Setup", "SSL Certificates"]
    },
    {
      id: 5,
      icon: <FaSearch />,
      title: "SEO Optimization",
      description: "Improve your website's search engine ranking with technical SEO, performance optimization, and best practices.",
      features: ["Technical SEO", "Performance Audit", "Meta Optimization", "Analytics Setup"]
    },
    {
      id: 6,
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces. Wireframing, prototyping, and design systems for better user experience.",
      features: ["Wireframing", "Prototyping", "Design Systems", "User Research"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We discuss your requirements, goals, and create a detailed project plan with timeline and milestones."
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "Create wireframes and prototypes to visualize the solution before development begins."
    },
    {
      step: "03",
      title: "Development",
      description: "Build your application using best practices, clean code, and modern technologies."
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing, deployment, and post-launch support to ensure everything works perfectly."
    }
  ];



  return (
    <div className="services">
      <div className="container">
        {/* Services Hero */}
        <section className="services-hero section">
          <motion.div 
            className="hero-content text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title">My Services</h1>
            <p className="hero-description">
              I offer comprehensive software development services to help bring your ideas to life. 
              From web applications to mobile apps, I've got you covered with modern technologies and best practices.
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="services-grid-section section">
          <div className="grid grid-3">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className="service-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a href="/contact" className="btn btn-primary">Contact Me</a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Process
          </motion.h2>
          <div className="process-grid">
            {process.map((item, index) => (
              <motion.div 
                key={index}
                className="process-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="process-step">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>



        {/* CTA Section */}
        <section className="cta-section section">
          <motion.div 
            className="cta-content card text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss your ideas and create something amazing together!</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                <FaRocket /> Start Project
              </a>
              <a href="/contact" className="btn btn-secondary">
                <FaCog /> Free Consultation
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Services;