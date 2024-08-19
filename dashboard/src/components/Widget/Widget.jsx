import React from 'react';
import './Widget.css';

const Widget = ({ title, children, onRemove }) => {
  return (
    <div className="widget">
      <div className="widget-header">
        <h4>{title}</h4>
        {/* <button onClick={onRemove} className="remove-widget">Remove</button> */}
      </div>
      <div className="widget-content">
        {children}
      </div>
    </div>
  );
};

export default Widget;
