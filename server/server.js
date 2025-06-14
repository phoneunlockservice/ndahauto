const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();

// CORS — not needed if frontend is served from same server, but okay to keep for dev
app.use(cors({
  origin: ['http://localhost:5173', 'https://ndahauto.com'],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Basic logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err));

// Routes
const reservationRoutes = require('./routes/reservation');
app.use('/api/reservations', reservationRoutes);

// Serve static files from frontend build
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all other routes by serving index.html (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));