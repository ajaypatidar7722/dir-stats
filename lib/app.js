const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
  res.status(200).send({ data: 'pong' });
});

app.listen(port, () => {
  console.log(`Dir stats is listening at http://localhost:${port}`);
});

module.exports = app;
