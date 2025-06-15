const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Reservation = require('../models/Reservation');
require('dotenv').config();

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/reservations
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    console.log('📝 Reservation submission received:', data);

    // Save to MongoDB
    const newReservation = new Reservation(data);
    await newReservation.save();
    console.log('✅ Saved to database');

    // Send email
    const mailOptions = {
      from: `"Ndah Auto Reservation" <hello@ndahauto.com>`,
      to: 'hello@ndahauto.com',
      subject: 'New Vehicle Reservation',
      html: `
        <h3>New Reservation Details</h3>
        <p><strong>Vehicle:</strong> ${data.vehicle}</p>
        <p><strong>AC:</strong> ${data.acPreference}</p>
        <p><strong>Pickup:</strong> ${data.pickupLocation} on ${data.pickupDate} at ${data.pickupTime}</p>
        <p><strong>Return:</strong> ${data.returnLocation} on ${data.returnDate}</p>
        <p><strong>Driver Needed:</strong> ${data.driverNeeded}</p>
        <p><strong>Phone:</strong> ${data.phoneNumber}</p>
        <p><strong>Notes:</strong> ${data.additionalNotes}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('📧 Email sent successfully');

    res.status(200).json({ success: true, message: 'Reservation submitted' });
  } catch (error) {
    console.error('❌ Error in reservation submission:', error);
    res.status(500).json({ success: false, message: 'Error submitting reservation' });
  }
});

module.exports = router;