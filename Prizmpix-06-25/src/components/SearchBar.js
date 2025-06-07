import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle search submission
    console.log('Search query:', searchQuery);
  };

return (
  <form style={{ position: 'absolute', top: '40px', right: '100px', backgroundColor: '#f9f9f9', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', zIndex: 1000 }} onSubmit={handleSearchSubmit}>
    <input
      type="search"
      value={searchQuery}
      onChange={handleSearchInputChange}
      placeholder="Search..."
      style={{ padding: '10px', border: 'none', borderRadius: '5px', width: '200px' }}
    />
    <button type="submit" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      Search
    </button>
  </form>
);
};

export default SearchBar;