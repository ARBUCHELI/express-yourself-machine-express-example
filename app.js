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

app.get('/expressions/:id', (req, res, next) => {
  const foundExpression = getElementById(req.params.id, expressions);
  if (foundExpression) {
    res.send(foundExpression)
  }
  else {
    res.status(404).send('Expression not found!')
  }
});

// Add your PUT route handler below:
app.put('/expressions/:id', (req, res, next) => {
  
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
