// server/models/PageView.js
const mongoose = require('mongoose');

const pageViewSchema = new mongoose.Schema({
  ip: String,
  path: String,
  date: Date,
});

module.exports = mongoose.model('PageView', pageViewSchema);