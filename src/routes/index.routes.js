const express = require('express');
const healthcheck = require('./healthcheck.routes');

const router = express.Router();

router.use('/', healthcheck);

module.exports = router;
