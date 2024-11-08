const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('!')
});

app.get('/affirm/:name', (req, res) => {
  res.send('<h1>you rock, ' + req.params.name + '</h1>')
});

app.listen(3000, () => {
  console.log('server started');
});
