const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// CORS setup for both local and production
app.use(cors({
  origin: (origin, callback) => {
    console.log('🛂 CORS origin check:', origin);
    const allowedOrigins = [
      'http://localhost:5173',
      'https://ndahauto.com',
      'https://www.ndahauto.com',
      'https://api.ndahauto.com',
      'https://believable-youth-production.up.railway.app'
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
}));

app.use(express.json());

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

// Routes
const reservationRoutes = require('./routes/reservation');
const visitorRoutes = require('./routes/visitors');

app.use('/api/reservations', reservationRoutes);
app.use('/api/visitors', visitorRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));