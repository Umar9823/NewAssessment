import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">Dashboard</div>
      <div className="sidebar-item">Reports</div>
      <div className="sidebar-item">Settings</div>
      {/* Add more sidebar items here */}
    </div>
  );
};

export default Sidebar;
