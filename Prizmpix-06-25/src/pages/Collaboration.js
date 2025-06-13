import React from 'react';
import './Aboutstyle.css';
import { Link } from 'react-router-dom';

const Collaboration = () => {
  return (
    <div className="title-container">
      <div className="marquee">
        <h1>
          <span>Collaborate.</span>
          <span>//</span>
          <span>Collaborate.</span>
          <span>//</span>
          <span>Collaborate.</span>
          <span>//</span>
          <span>Collaborate.</span>
          <span>//</span>
          <span>Collaborate.</span>
          <span>//</span>
        </h1>
      </div>
    <div className="about-page">
      <div className="about-card">
        <img src="/images/profile.png" width="150" alt="Patrick's profile image" />
        <h1>Let's Collaborate!</h1>
        <h2>Let's do this!</h2>
        <p>
          If you have some ideas you'd liek to share or think i can be of service, shoot me a message! You can check out my portfolio in the link above in the navbar. 
        </p>
        <Link to="/portfolio">
            My Portfolio
        </Link>
        <Link to="/contact">
            Contact Me
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Collaboration;