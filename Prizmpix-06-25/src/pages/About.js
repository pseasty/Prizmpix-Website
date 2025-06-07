import React from 'react';
import './style.css';

const About = () => {
  return (
    <div className="about-container">
      <img src="https://mimo.app/i/emmy.png" width="150" alt="Emmy's image" />
      <h1>Patrick</h1>
      <h2>Aspiring Software Developer</h2>
      <p>
        Welcome to my page! I'm Patrick, an aspiring software developer. Follow my
        journey by checking out my social media profiles. Happy coding!
      </p>
      <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i> Instagram
      </a>
      <a href="https://example.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-tiktok"></i> TikTok
      </a>
    </div>
  );
};

export default About;