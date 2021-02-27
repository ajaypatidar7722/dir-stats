const express = require('express');
const routes = require('../src/routes/index.routes');

const app = express();

const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`Dir stats is listening at http://localhost:${port}`);
});

module.exports = app;
