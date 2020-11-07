//const Utils = require('../src/utils/utils');

module.exports = {

    async getHealth(req, res, next) {
        return res.json({"status": 1});
    },

    async getRandomData(req, res, next){
        return res.json({"random value": 12345});
    }
}
