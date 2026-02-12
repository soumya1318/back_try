const express = require('express');

const app = express();

app.use(express.json());

app.post('/api/greet', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  res.json({ message: `Hello ${username}` });
});

module.exports = app;
