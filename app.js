const express = require('express');
const app = express();

// Serves Express Yourself website
app.use(express.static('public'));

const { getElementById, seedElements } = require('./utils');

const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 4001;

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

// Add a new call to app.get('/expressions/:id') here
app.get('/expressions/:id', (req, res, next) => {
  const response = getElementById(req.params.id, expressions);
  res.send(response);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
