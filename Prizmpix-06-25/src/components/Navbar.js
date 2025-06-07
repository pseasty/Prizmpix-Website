import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaEnvelope } from 'react-icons/fa';
import SearchBar from './SearchBar';


const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
  };
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      {/* logo*/}
      <div>
        <Link to="/">
      <img src="/images/logo-white.png" alt="Prizmpix Logo" style={{ height: '40px' }} />
</Link>
      </div>

      {/* Navlinks*/}
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 auto', marginBottom: '0.5rem' }}>
        <li style={{ marginRight: '20px' }}><Link to="/">Home</Link></li>
        <li style={{ marginRight: '20px' }}><Link to="/services">Services</Link></li>
        <li style={{ marginRight: '20px' }}><Link to="/about">About</Link></li>
        <li style={{ marginRight: '20px' }}><Link to="/collaboration">Collaboration</Link></li>
        <li style={{ marginRight: '20px' }}><Link to="/portfolio">Portfolio</Link></li>
      </ul>

      {/* Icons*/}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginLeft: '20px' }}>
         <Link to="/contact" style={{ marginRight: '20px' }}><FaEnvelope size={24} /></Link>
         <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginRight: '0px' }} onClick={handleSearchIconClick}>
           <FaSearch size={24} style={{ color: '#fff', transition: 'transform 0.2s ease-in-out' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
         </button>
         <Link to="/checkout" style={{ marginRight: '40px' }}><FaShoppingCart size={24} /></Link>
      </div>
      {showSearch && <SearchBar />}
    </nav>
  );
};

export default Navbar;