import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <h2>Full Stack Developer</h2>
          <p>
            I create beautiful, responsive web applications using modern technologies.
            Passionate about clean code, user experience, and solving complex problems.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <button className="btn-secondary" onClick={scrollToProjects}>
              View My Work
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>portfolio.js</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="property">name</span>: <span className="string">'Your Name'</span>,
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'Node.js'</span>, <span className="string">'JavaScript'</span>],
              </div>
              <div className="code-line">
                &nbsp;&nbsp;<span className="property">passion</span>: <span className="string">'Building amazing things'</span>
              </div>
              <div className="code-line">
                {'}'};
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;