const Docker = require('../src/docker/index.js');

module.exports = {
    async getAllImages(req, res, next){
        const body = req.body;
        try{
            const images = await Docker.getAllImages();
            return res.json({images});

        }catch(err) {
            return res.json({"error": err});
        }
    }
}