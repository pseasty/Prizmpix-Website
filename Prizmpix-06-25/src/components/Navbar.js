import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuClick = () => {
    setShowMobileMenu(prev => !prev);
  };

  const handleMobileLinkClick = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav className="main-nav">
      <div className="logo">
        <Link to="/">
          <img src="/images/logo-white.png" alt="Prizmpix Logo" style={{ height: '40px' }} />
        </Link>
      </div>

      <ul className="desktop-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/collaboration">Collaboration</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>

      <div className="nav-icons">
        <Link to="/contact" className="nav-icon">
          <FaEnvelope size={24} />
        </Link>
        <div className="mobile-menu-button" onClick={handleMobileMenuClick} aria-label="Toggle mobile menu" tabIndex={0}>
          <FaBars size={24} />
        </div>
      </div>

      {showMobileMenu && (
        <div className="mobile-menu show">
          <ul onClick={handleMobileLinkClick}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/collaboration">Collaboration</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;