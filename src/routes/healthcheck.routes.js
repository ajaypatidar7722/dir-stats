const express = require('express');
const healthcheckController = require('../controller/healthcheck.controller');

const router = express.Router();

router.get('/ping', healthcheckController.ping);

module.exports = router;
