import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaMobile, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiExpress } from 'react-icons/si';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'JavaScript', icon: <SiJavascript />, level: 95 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 88 },
    { name: 'Express', icon: <SiExpress />, level: 85 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
    { name: 'React Native', icon: <FaMobile />, level: 75 },
    { name: 'Git', icon: <FaGitAlt />, level: 90 }
  ];

  const experience = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2024 - Present",
      description: "Leading development of web applications using React and Node.js. Mentoring junior developers and implementing best practices."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2024",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create user-friendly interfaces."
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2023 - 2024",
      description: "Built responsive web applications and improved user experience. Worked closely with UX designers to implement pixel-perfect designs."
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "Comsats University Islamabad, Abbottabad Campus",
      period: "2022 - 2026",
      description: "Current Enrolled. Specialized in software engineering and web development."
    }
  ];

  return (
    <div className="about">
      <div className="container">
        {/* About Hero */}
        <section className="about-hero section">
          <motion.div 
            className="about-intro text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title">About Anas Ali</h1>
            <div className="about-image-center">
              <div className="profile-container">
                <img 
                  src="/images/anas-ali.jpg" 
                  alt="Anas Ali - Software Engineer"
                />
                <div className="profile-glow"></div>
              </div>
            </div>
            <p className="about-subtitle">
              Passionate Software Engineer & Full-Stack Developer
            </p>
          </motion.div>
        </section>

        {/* About Description */}
        <section className="about-description-section section">
          <div className="about-content-grid">
            <motion.div 
              className="about-story card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>My Story</h2>
              <p>
                I'm Anas Ali, a passionate Software Engineer with over 4 years of experience in creating 
                digital solutions that make a difference. I specialize in full-stack web development, 
                mobile applications, and modern JavaScript frameworks.
              </p>
              <p>
                My journey in software development started during my university years, and since then, 
                I've been constantly learning and adapting to new technologies. I believe in writing 
                clean, maintainable code and creating user experiences that are both beautiful and functional.
              </p>
            </motion.div>

            <motion.div 
              className="about-stats-section"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="stats-grid">
                <motion.div 
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </motion.div>
                <motion.div 
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Years Experience</div>
                </motion.div>
                <motion.div 
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Happy Clients</div>
                </motion.div>
                <motion.div 
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="skill-header">
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Work Experience
          </motion.h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="timeline-content card">
                  <div className="timeline-header">
                    <h3>{exp.title}</h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <h4 className="company">{exp.company}</h4>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="education-section section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.id}
                className="education-item card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <span className="education-period">{edu.period}</span>
                <p>{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;