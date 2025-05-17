const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express app
const app = express();

// Use Render's dynamic port if available, otherwise fallback to 3001
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON body

// Use environment variable for MongoDB URI (best practice)
const MONGO_URI = process.env.MONGO_URI || 'your_fallback_connection_string_here';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// Define Mongoose schema & model
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

// POST route to save messages
app.post('/api/message', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(200).json({ success: true, msg: 'Message saved successfully.' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on ${process.env.BASE_URL || 'http://localhost:' + PORT}`);
});
