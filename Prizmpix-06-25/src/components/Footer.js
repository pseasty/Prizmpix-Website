import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#333', color: '#fff', padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/images/logo-white.png" alt="Prizmpix Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '25%', marginRight: '20px' }}>
            <a href="javascript:void(0)" className="nav-link" style={{ color: '#fff', textDecoration: 'none', marginBottom: '10px' }}>Home</a>
            <a href="javascript:void(0)" className="nav-link" style={{ color: '#fff', textDecoration: 'none', marginBottom: '10px' }}>Services</a>
            <a href="javascript:void(0)" className="nav-link" style={{ color: '#fff', textDecoration: 'none', marginBottom: '10px' }}>About</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
            <a href="javascript:void(0)" className="nav-link" style={{ color: '#fff', textDecoration: 'none', marginBottom: '10px' }}>Collaboration</a>
            <a href="javascript:void(0)" className="nav-link" style={{ color: '#fff', textDecoration: 'none', marginBottom: '10px' }}>Portfolio</a>
            <a href="javascript:void(0)" className="nav-link" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</a>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
         <a href="javascript:void(0)" className="social-icon" style={{ marginBottom: '10px', color: '#fff' }}>
               <FaFacebookF size={24} />
         </a>
         <a href="javascript:void(0)" className="social-icon" style={{ marginBottom: '10px', color: '#fff' }}>
              <FaTwitter size={24} />
         </a>
         <a href="javascript:void(0)" className="social-icon" style={{ color: '#fff' }}>
              <FaInstagram size={24} />
         </a>
</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0', borderTop: '1px solid #444' }}>
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