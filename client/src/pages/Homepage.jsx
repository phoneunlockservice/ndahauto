import React from 'react';
import Carousel from '../components/Carousel';
import ReserveForm from '../components/ReserveForm';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import FleetShowcase from '../components/FleetShowcase';
import CallToAction from '../components/CallToAction';

export default function Homepage() {
  return (
    <>
      <Carousel />
      <ReserveForm />
      <HowItWorks />
      <FleetShowcase />
      <WhyChooseUs />
      <CallToAction />
    </>
  );
}