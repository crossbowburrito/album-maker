import React, { useState } from 'react';
import './Tooltip.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Tooltip({ text }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const isMobile = window.innerWidth <= 768;

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleClick = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <i className="fa fa-info-circle" aria-hidden="true"></i>
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: isMobile ? '0' : '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px',
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '5px',
            zIndex: 1,
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}