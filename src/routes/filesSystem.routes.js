const express = require('express');
const fileSystemController = require('../controller/fileSystem.controller');

const router = express.Router();

router.get('/stats', fileSystemController.stats);

module.exports = router;
