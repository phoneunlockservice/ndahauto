const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const sendEmailNotification = require('../utils/sendEmail');

router.post('/', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    await sendEmailNotification(req.body);
    res.status(201).json({ message: 'Reservation successful' });
  } catch (err) {
    console.error('Error saving reservation:', err);
    res.status(500).json({ error: 'Failed to save reservation' });
  }
});

module.exports = router;
