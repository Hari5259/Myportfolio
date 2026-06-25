import React from 'react';
import './GlassCard.css';

const GlassCard = ({ children, className = '', glowOnHover = true, ...props }) => {
  return (
    <div 
      className={`glass-card ${glowOnHover ? 'glass-card-hover' : ''} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
