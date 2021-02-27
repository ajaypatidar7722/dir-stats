
const ping = async () => {
  return 'pong';
};

const healthcheckResolvers = {
  ping,
};

module.exports = healthcheckResolvers;
