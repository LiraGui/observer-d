const healthCheck = require('../api/healthCheck').router;

module.exports = function (server) {

    server.use('/api/health-check', healthCheck);

    console.log('Available route: /api/health-check');
    console.log('==========================================================================');
}