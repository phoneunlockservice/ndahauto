// src/components/WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Wallet, Armchair } from "lucide-react"; // Sleek modern icons
import "./WhyChooseUs.css";

const features = [
  {
    icon: <ShieldCheck size={36} />,
    title: "Reliable & Secure",
    desc: "Our vehicles are well-maintained, ensuring you a smooth and safe ride every time."
  },
  {
    icon: <Wallet size={36} />,
    title: "Affordable Pricing",
    desc: "We offer the best rates without compromising on service or comfort."
  },
  {
    icon: <Armchair size={36} />,
    title: "Premium Comfort",
    desc: "Enjoy clean, air-conditioned vehicles for an exceptional travel experience."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <motion.h2
        className="why-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Us
      </motion.h2>

      <div className="why-grid">
        {features.map((item, idx) => (
          <motion.div
            className="why-item"
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}