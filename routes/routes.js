const healthCheck = require('../api/healthCheck').router;
const images = require('../api/images').router;

module.exports = function (server) {

    server.use('/api/health-check', healthCheck);
    server.use('/api/images', images);

    console.log('Available route: /api/health-check');
    console.log('==========================================================================');
}