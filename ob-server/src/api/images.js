const express = require('express');
const router = express.Router();
const imagesController = require('../controller/imagesController.js');

router.get('/', imagesController.getAllImages);
router.get('/simple', imagesController.getSimpleImages);
router.get('/search', imagesController.searchImages);
router.post('/pull', imagesController.pullImagesFromHub);

module.exports = {
    router,
}