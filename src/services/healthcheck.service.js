
class HealthcheckService {
  static check = async () => {
    // TODO: write healthcheck logic here & throw exception is service is not up.
    return 'success';
  }
};

module.exports = HealthcheckService;
