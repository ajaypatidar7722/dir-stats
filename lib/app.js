const express = require('express');
var { graphqlHTTP } = require('express-graphql');

const routes = require('../src/routes/index.routes');
const schema = require('../src/schema');

const app = express();

const port = process.env.PORT || 3000;

app.use(routes);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`Dir stats is listening at http://localhost:${port}`);
});

module.exports = app;
