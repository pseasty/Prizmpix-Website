import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#333', color: '#fff', padding: '0 20px' }}>
        <div className="footer-container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div><Link to="/"><img src="/images/logo-white.png" alt="Prizmpix Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} /></Link></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1, marginRight: '30px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '30%', marginRight: '20px' }}>
            <div><Link to="/" className="nav-link" style={{ color: '#fff', textDecoration: 'none', marginBottom: '10px' }}>Home</Link></div>
            <div><Link to="/about" className="nav-link" style={{ color: '#fff', textDecoration: 'none', marginBottom: '10px' }}>About</Link></div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '30%' }}>
            <div><Link to="/collaboration" className="nav-link" style={{ color: '#fff', textDecoration: 'none', marginBottom: '10px' }}>Collaboration</Link></div>
            <div><Link to="/portfolio" className="nav-link" style={{ color: '#fff', textDecoration: 'none', marginBottom: '10px' }}>Portfolio</Link></div>
            <div><Link to="/contact" className="nav-link" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</Link></div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <a href="https://github.com/pseasty" className="social-icon" style={{ marginBottom: '10px', color: '#fff' }}>
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
  <p>&copy; {new Date().getFullYear()} Prizmpix. All rights reserved.</p>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <p style={{ marginRight: '10px', marginTop: '10px' }}>We accept:</p>
    <FaCcVisa size={40} style={{ marginRight: '10px' }} />
    <FaCcMastercard size={40} style={{ marginRight: '10px' }} />
    <FaCcAmex size={40} style={{ marginRight: '10px' }} />
    <FaCcPaypal size={40} style={{ marginRight: '10px' }} />
  </div>
</div>
    </footer>
  );
};

export default Footer;