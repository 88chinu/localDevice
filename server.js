const express = require('express');
const connectDB = require('./config/db');
const webRoutes = require('./routes/webRoutes');
const app = express();

// Middleware
app.use(express.json());  // To parse JSON bodies

// Connect to MongoDB
connectDB();

// Use the routes
app.use('/api', webRoutes);

app.get('/home', (req, res) => {
  res.send("<h2>Welcome to the Train Ticket Booking API</h2>");
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
