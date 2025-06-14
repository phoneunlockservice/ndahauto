const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
console.log('Loaded email config:', process.env.EMAIL_USER, process.env.EMAIL_PASS ? '✅ pass loaded' : '❌ pass missing');

const app = express();
app.use(cors());
app.use(express.json());

// Basic logger for all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err));

const reservationRoutes = require('./routes/reservation');
app.use('/api/reservations', reservationRoutes); // Handles POST

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));