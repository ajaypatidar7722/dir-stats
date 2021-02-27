const express = require('express');
const healthcheck = require('./healthcheck.routes');
const fileSystem = require('./filesSystem.routes');

const router = express.Router();

router.use('/', healthcheck);
router.use('/fs', fileSystem);

module.exports = router;
