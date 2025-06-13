const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const path = require('path');
const Reservation = require('./models/Reservation');

dotenv.config();

console.log('Loaded email config:', process.env.EMAIL_USER, process.env.EMAIL_PASS ? '✅ pass loaded' : '❌ pass missing');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
const reservationRoutes = require('./routes/reservation');
app.use('/api/reservations', reservationRoutes);

// Email Transporter
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Reserve endpoint
app.post('/api/reserve', async (req, res) => {
  try {
    const data = req.body;

    // Save to MongoDB
    const newReservation = new Reservation(data);
    await newReservation.save();

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

    res.status(200).json({ success: true, message: 'Reservation submitted' });
  } catch (error) {
    console.error('Error submitting reservation:', error);
    res.status(500).json({ success: false, message: 'Error submitting reservation' });
  }
});

// Serve frontend (dist)
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));