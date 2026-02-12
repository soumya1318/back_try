const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

app.use(express.json());

app.post('/api/greet', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  res.json({ message: `Hello ${username}` });
});

module.exports = app;
