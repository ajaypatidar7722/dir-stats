const HealthcheckService = require("../services/healthcheck.service");

const healthcheckController = {
  ping: async (req, res) => {
    try {
      await HealthcheckService.check();
      res.status(200).send({ data: 'ping' });
    } catch(error) {
      console.error('Healthcheck failed', error);
      res.status(500).send({ error, errorMessage: 'Healthcheck failed' });
    }
  }
}

module.exports = healthcheckController;
