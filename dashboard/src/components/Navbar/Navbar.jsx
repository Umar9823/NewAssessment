import React from 'react';
import './Navbar.css';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#" style={{ color: 'black', textDecoration: 'none' }}>Home</a>
        / <a href="#">Dashboard V2</a>
      </div>
      <div className="navbar-center">
        <div className="search-container">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            className="search"
            placeholder="Search anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <i className="fas fa-bell notification-icon"></i>
        <div className="profile">
          <i className="fas fa-user profile-icon"></i>
          <span className="profile-name">John Doe</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
