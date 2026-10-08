import React from 'react';

export const Container = ({ children, className = '', id, ...props }) => {
  return (
    <div
      id={id}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
