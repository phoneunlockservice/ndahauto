// server/models/Visitor.js
const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  ip: String,
  country: String,
  city: String,
  date: Date,
});

module.exports = mongoose.model('Visitor', visitorSchema);