// src/pages/RequirementsPage.jsx
import React from 'react';
import PageBanner from '../components/PageBanner';
import Breadcrumb from '../components/Breadcrumb';
import './css/RequirementsPage.css';

export default function RequirementsPage() {
  return (
    <main>
      <PageBanner
        title="Rental Requirements"
        backgroundImage="/assets/imgs/banner/reserve-banner.jpg"
      />

      <Breadcrumb current="Requirements" />

      <section className="requirements-section">
        <div className="container">
          <h3 className="requirements-title">Requirements</h3>

          <ul className="requirements-list">
            <li>
              Sign a car rental contract with us and provide a copy of your driver's license and passport (if you are not a Cameroonian citizen). Cameroonian citizens must provide a copy of their driver's license and national ID card.
            </li>
            <li>
              A vehicle inspection will be conducted before and after the rental period. Customers must return the vehicle in the same condition it was received.
            </li>
            <li>
              The vehicle must be returned with the same fuel level as at the time of pickup.
            </li>
            <li>
              Our vehicles are not authorized to cross the border into neighboring countries.
            </li>
            <li>
              Customers are not permitted to modify, repair, or authorize repairs on the vehicle without prior approval.
            </li>
            <li>
              In case of emergency, customers must contact us immediately.
            </li>
            <li>
              Sub-rental is strictly prohibited.
            </li>
            <li>
              Customers must obey all speed limits and applicable laws in Cameroon.
            </li>
            <li>
              Customers must seek approval before taking the vehicle to any area not specified in the rental agreement.
            </li>
            <li>
              Vehicles are insured for liability only. Customers are advised to carry their own insurance or subscribe for additional coverage when signing the rental agreement.
            </li>
          </ul>

          <div className="lease-download">
            <p>You can download our official lease agreement form below:</p>
            <a
              href="/docs/lease-agreement.pdf"
              download
              className="lease-download-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Lease Agreement Form (PDF)
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}