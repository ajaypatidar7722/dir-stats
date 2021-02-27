const fileSystemResolver = require('./fileSystem.resolver');
const healthcheckResolver = require('./healthcheck.resolver');

const resolvers = {
  Query: {
    ...fileSystemResolver,
    ...healthcheckResolver,
  },
};

module.exports = resolvers;
