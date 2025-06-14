import React, { useEffect, useState } from 'react';
import './Aboutstyle.css';
import { Link } from 'react-router-dom';

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="title-container">
      <div className="marquee">
        <h1>
          <span>About</span>
          <span></span>
          <span>About</span>
          <span></span>
          <span>About</span>
          <span></span>
          <span>About</span>
          <span></span>
          <span>About</span>
          <span></span>
        </h1>
      </div>
    <div className="about-page">
      <div className={`background-card ${animate ? 'animate-background' : ''}`}>
        <div className={`about-card ${animate ? 'animate-card' : ''}`}>
          <img src="/images/profile.png" width="150" alt="Patrick's profile image" />
          <h1>Patrick East</h1>
          <h2>Graphic UX Designer & Aspiring Software Developer</h2>
          <p>
            Welcome to my page! I'm Patrick, an aspiring software developer. Follow my
            journey by checking out my social media profiles. Happy coding!
          </p>
          <div className={`button-container ${animate ? 'animate-buttons' : ''}`}>
            <a href="https://github.com/pseasty/Prizmpix-Website" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-git"></i> My Github
            </a>
            <Link to="/contact">
              <i className="contact"></i> Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;