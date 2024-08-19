import React from 'react';

const ButtonWidget = ({ data, onOpenPanel }) => {
  const handleClick = () => {
    if (data.action === "addWidget") {
      onOpenPanel();
    }
  };

  return (
    <button onClick={handleClick}>
      {data.label}
    </button>
  );
};

export default ButtonWidget;
