import React from 'react';
import './PageBanner.css';

export default function PageBanner({ title, backgroundImage }) {
  return (
    <div
      className="page-banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`,
      }}
    >
      <h1>{title}</h1>
    </div>
  );
}