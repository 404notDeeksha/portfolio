import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS/Sass', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'Git', level: 80 },
    { name: 'MongoDB', level: 70 },
    { name: 'Express.js', level: 80 }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with 3+ years of experience in creating 
              web applications. I enjoy turning complex problems into simple, beautiful, 
              and intuitive designs.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or enjoying a good book. I believe in continuous 
              learning and staying up-to-date with the latest industry trends.
            </p>
            <div className="experience">
              <div className="exp-item">
                <h4>3+</h4>
                <span>Years Experience</span>
              </div>
              <div className="exp-item">
                <h4>50+</h4>
                <span>Projects Completed</span>
              </div>
              <div className="exp-item">
                <h4>10+</h4>
                <span>Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;