import React from 'react';
import reserveBanner from '../assets/imgs/banner/reserve-banner.jpg';
import PageBanner from '../components/PageBanner';
import Breadcrumb from '../components/Breadcrumb';
import ReserveForm from '../components/ReserveForm';

export default function ReservePage() {
  return (
    <>
      <main>
        {/* Top banner with background image */}
        <PageBanner
          title="Reserve a Vehicle"
          backgroundImage={reserveBanner}
        />

        {/* Breadcrumb trail */}
        <Breadcrumb current="Reserve a Vehicle" />

        {/* Reservation form section */}
        <section style={{ padding: '2rem 1rem' }}>
          <div className="container">
            <ReserveForm />
          </div>
        </section>
      </main>
    </>
  );
}