// src/components/HowItWorks.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Car,
  CalendarClock,
  MapPin,
  UserCheck
} from "lucide-react"; // Clean modern icons
import "./HowItWorks.css";

const steps = [
  {
    icon: <Car size={32} />,
    title: "Choose Your Vehicle",
    desc: "Browse through our fleet and pick a car that suits your trip."
  },
  {
    icon: <CalendarClock size={32} />,
    title: "Select Date & Time",
    desc: "Set your preferred pickup and return date and time."
  },
//   {
//     icon: <MapPin size={32} />,
//     title: "Set Pickup & Drop-off",
//     desc: "Tell us where to pick you up and where you're headed."
//   },
  {
    icon: <UserCheck size={32} />,
    title: "Confirm & Go",
    desc: "Submit your details and get ready to hit the road with confidence."
  }
];

export default function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <motion.h3
        className="hiw-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How It Works
      </motion.h3>

      <div className="hiw-steps">
        {steps.map((step, index) => (
          <motion.div
            className="hiw-step"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="hiw-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
