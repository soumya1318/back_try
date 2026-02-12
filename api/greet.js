const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('api working');
});

// POST route
app.post('/greet', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  res.json({ message: `Hello ${username}` });
});

// Export for Vercel
module.exports = app;
