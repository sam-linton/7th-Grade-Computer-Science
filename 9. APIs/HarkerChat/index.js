const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const messages = [];

function receiveMessage(req, res) {
  let message = req.params.message;
  messages.push(message);
  sendMessage(req, res);
}

function sendMessage(req, res) {
  console.log(JSON.stringify(messages));
  res.send(JSON.stringify(messages));
}

app.get('/', sendMessage);
app.get('/send/:message', receiveMessage);

app.listen(3000);
