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
        <h1>Patrick</h1>
        <h2>Aspiring Software Developer</h2>
        <p>
          Welcome to my page! I'm Patrick, an aspiring software developer. Follow my
          journey by checking out my social media profiles. Happy coding!
        </p>
<Link to="/contact">
  Contact Me
</Link>
      </div>
    </div>
    </div>
  );
};

export default Collaboration;