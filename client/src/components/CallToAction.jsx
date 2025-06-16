// src/components/CallToAction.jsx
import React from "react";
import "./CallToAction.css";
import { Link } from "react-router-dom";
import carBg from "../assets/imgs/cta-bg.jpg"; // replace with your actual image path

export default function CallToAction() {
  return (
    <section
      className="cta-section"
      style={{ backgroundImage: `url(${carBg})` }}
    >
      <div className="cta-overlay">
        <div className="cta-content">
          <h2>Ready to Ride in Style?</h2>
          <p>Book your next trip with Ndah Auto today — comfort, reliability, and elegance await you.</p>
          <button className="cta-btn"><Link to="/reserve" className="cta-btn-link">Reserve Now</Link></button>
        </div>
      </div>
    </section>
  );
}