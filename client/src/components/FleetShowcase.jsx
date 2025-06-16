// src/components/FleetShowcase.jsx
import React from "react";
import { motion } from "framer-motion";
import "./FleetShowcase.css";
import aurisImg from '../assets/imgs/fleet/auris.jpg';
import vanguardImg from '../assets/imgs/fleet/vanguard.jpg';
import crvImg from '../assets/imgs/fleet/crv.jpg';
import grandeurImg from '../assets/imgs/fleet/grandeur.jpg';
import santaFeImg from '../assets/imgs/fleet/santa-fe.jpg';
import ml350Img from '../assets/imgs/fleet/ml350.jpg';

const cars = [
    { name: "Toyota Auris", image: aurisImg },
    { name: "Toyota Vanguard", image: vanguardImg },
    { name: "Honda CR-V", image: crvImg },
    { name: "Hyundai Grandeur", image: grandeurImg },
    { name: "Hyundai SantaFe", image: santaFeImg },
    { name: "Mercedes ML350", image: ml350Img },
   ];

export default function FleetShowcase() {
  return (
    <section className="fleet-section">
      <motion.h2
        className="fleet-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore Our Fleet
      </motion.h2>

      <div className="fleet-grid">
        {cars.map((car, idx) => (
          <motion.div
            className="fleet-card"
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, type: "spring" }}
            viewport={{ once: true }}
          >
            <img src={car.image} alt={car.name} />
            <div className="fleet-label">{car.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}