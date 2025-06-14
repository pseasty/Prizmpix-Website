import React, { useEffect, useState } from 'react';
import './Collaboration.css';
import { Link } from 'react-router-dom';

const Collaboration = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="title-container">
      <div className="marquee">
        <h1>
          <span>Collaborate</span>
          <span></span>
          <span>Collaborate</span>
          <span></span>
          <span>Collaborate</span>
          <span></span>
          <span>Collaborate</span>
          <span></span>
          <span>Collaborate</span>
          <span></span>
        </h1>
      </div>
      <div className="about-page">
        <div className={`background-card ${animate ? 'animate-background' : ''}`}>
          <div className={`about-card ${animate ? 'animate-card' : ''}`}>
            <img src="/images/collab2.jpeg" width="150" alt="Patrick's profile image" />
            <h1>Let's Collaborate!</h1>
            <p>
              If you have some ideas you'd like to share or think I can be of service, shoot me a message! You can check out my portfolio in the link below.
            </p>
            <div className={`button-container ${animate ? 'animate-buttons' : ''}`}>
              <Link to="/portfolio">
                My Portfolio
              </Link>
              <Link to="/contact">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;