import React, { useEffect, useState } from 'react';
import './Aboutstyle.css';

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="title-container">
      <div className="marquee">
        <h1>
          <span>About.</span>
          <span>//</span>
          <span>About.</span>
          <span>//</span>
          <span>About.</span>
          <span>//</span>
          <span>About.</span>
          <span>//</span>
          <span>About.</span>
          <span>//</span>
        </h1>
      </div>
    <div className="about-page">
      <div className={`about-card ${animate ? 'animate-card' : ''}`}>
        <img src="/images/profile.png" width="150" alt="Patrick's profile image" />
        <h1>Patrick</h1>
        <h2>Aspiring Software Developer</h2>
        <p>
          Welcome to my page! I'm Patrick, an aspiring software developer. Follow my
          journey by checking out my social media profiles. Happy coding!
        </p>
        <div className={`button-container ${animate ? 'animate-buttons' : ''}`}>
          <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i> TikTok
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;