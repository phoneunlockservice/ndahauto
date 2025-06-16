import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

export default function Breadcrumb({ current }) {
  return (
    <div className="breadcrumb">
      <p>
        <Link to="/home">HOME</Link> <span>/</span> <span>PAGES</span> <span>/</span> <span className="current">{current.toUpperCase()}</span>
      </p>
    </div>
  );
}