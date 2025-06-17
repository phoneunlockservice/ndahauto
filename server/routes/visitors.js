// server/routes/visitors.js
const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitor');
const PageView = require('../models/PageView');
const axios = require('axios');
const dayjs = require('dayjs');

// Middleware to track unique visitors per day
router.post('/', async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
    const today = dayjs().startOf('day');

    const existing = await Visitor.findOne({ ip, date: { $gte: today.toDate() } });
    if (existing) return res.status(200).json({ message: 'Already logged today' });

    const geo = await axios.get(`https://ipapi.co/${ip}/json/`).then(res => res.data);

    const visitor = new Visitor({
      ip,
      country: geo.country_name || 'Unknown',
      city: geo.city || 'Unknown',
      date: new Date()
    });
    await visitor.save();
    res.status(201).json({ message: 'Visitor logged' });
  } catch (err) {
    console.error('Visitor log error:', err);
    res.status(500).json({ message: 'Error logging visitor' });
  }
});

// Endpoint to get today's visitors
router.get('/today', async (req, res) => {
  try {
    const today = dayjs().startOf('day');
    const visitors = await Visitor.find({ date: { $gte: today.toDate() } });
    res.json({ count: visitors.length, visitors });
  } catch (err) {
    console.error('Error fetching visitors:', err);
    res.status(500).json({ message: 'Error fetching visitors' });
  }
});

// Middleware to track pageviews
router.post('/track', async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
    const { path } = req.body;
    const today = dayjs().startOf('day');

    const existing = await PageView.findOne({ ip, path, date: { $gte: today.toDate() } });
    if (existing) return res.status(200).json({ message: 'Already tracked today' });

    const view = new PageView({ ip, path, date: new Date() });
    await view.save();
    res.status(201).json({ message: 'Pageview logged' });
  } catch (err) {
    console.error('Pageview log error:', err);
    res.status(500).json({ message: 'Error logging pageview' });
  }
});
module.exports = router;