const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Ensure to use process.env.DB_URI for production or local environment variables
    const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/mydatabase';
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB;
