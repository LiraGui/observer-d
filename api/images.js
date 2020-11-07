const express = require('express');
const router = express.Router();
const imagesController = require('../controller/imagesController.js');

router.get('/', imagesController.getAllImages);

module.exports = {
    router,
}