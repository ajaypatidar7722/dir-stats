const fileSystemTypes = require('./fileSystem.js');

const rootQuery = `
  type Query {
    ping: String
    getStats(path: String!, page: Int, count: Int): FileStats
  }
`;

const Types = `
  ${fileSystemTypes}

  ${rootQuery}
`;

module.exports = Types
