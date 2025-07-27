import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://your-ecommerce-demo.com',
      image: 'https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+Platform'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: 'https://your-task-manager-demo.com',
      image: 'https://via.placeholder.com/400x250/059669/ffffff?text=Task+Manager'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides current weather conditions and forecasts for multiple cities using OpenWeather API.',
      technologies: ['JavaScript', 'CSS3', 'OpenWeather API', 'Chart.js'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      liveUrl: 'https://your-weather-demo.com',
      image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Weather+Dashboard'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and reporting features.',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/yourusername/social-dashboard',
      liveUrl: 'https://your-social-demo.com',
      image: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=Social+Dashboard'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, comment system, and admin panel for content management.',
      technologies: ['Next.js', 'Tailwind CSS', 'Sanity.io', 'Vercel'],
      githubUrl: 'https://github.com/yourusername/blog-platform',
      liveUrl: 'https://your-blog-demo.com',
      image: 'https://via.placeholder.com/400x250/ea580c/ffffff?text=Blog+Platform'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and modern CSS techniques, featuring smooth animations and mobile-first design.',
      technologies: ['React', 'CSS3', 'Framer Motion', 'Netlify'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://your-portfolio-demo.com',
      image: 'https://via.placeholder.com/400x250/0891b2/ffffff?text=Portfolio+Site'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and experience
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;