const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const quotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Life is what happens when you're busy making other plans.",
  "Don't let yesterday take up too much of today.",
  "You only live once, but if you do it right, once is enough.",
  "Your time is limited, don't waste it living someone else's life."
];

app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
