const express = require('express');
const router = express.Router();
const healthCheckController = require('../controller/healthCheckController.js');

router.get('/', healthCheckController.getHealth);
router.get('/random', healthCheckController.getRandomData);

module.exports = {
    router,
}