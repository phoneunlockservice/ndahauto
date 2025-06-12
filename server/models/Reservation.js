const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  vehicle: String,
  acPreference: String,
  pickupLocation: String,
  returnLocation: String,
  pickupDate: String,
  pickupTime: String,
  returnDate: String,
  driverNeeded: String,
  phoneNumber: String,
  additionalNotes: String,
  agreed: Boolean,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Reservation', reservationSchema);