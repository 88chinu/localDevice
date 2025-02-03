//routes/webRoutes.js
const express = require('express');
const webModel = require('../model/webModel');
const router = express.Router();

// Add new booking route
router.post('/train', async (req, res) => {
  try {
    const { name, age, gender, email, train, date, seats } = req.body;
    const newBooking = new webModel({ name, age, gender, email, train, date, seats });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating booking", error: err });
  }
});

// Get all bookings route
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await webModel.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookings", error: err });
  }
});

// Get booking by ID route
router.get('/booking/:id', async (req, res) => {
  try {
    const booking = await webModel.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ message: "Error fetching booking", error: err });
  }
});

// Delete booking by ID route
router.delete('/booking/:id', async (req, res) => {
  try {
    const booking = await webModel.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting booking", error: err });
  }
});

module.exports = router;
