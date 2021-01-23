const Docker = require('../src/docker/index.js');
const DockerParse = require('../src/docker/dockerParser.js');

module.exports = {
    async getAllImages(req, res, next){
        try{
            const images = await Docker.getAllImages();
            return res.json({images});

        }catch(err) {
            return res.json({"error": err});
        }
    },

    async getSimpleImages(req, res, next){
        try{
            const images = await Docker.getAllImages();
            let simpleImages = [];
            images.forEach(el => {
                simpleImages.push(DockerParse.reduceImageData(el.Id ,el.RepoTags[0]));
            });
            //return res.json("images");
            return res.json({simpleImages});
        }catch(err) {
            return res.json({"error": err});
        }
    },

    async searchImages(req, res, next) {
        const name = req.query.term;
        try{
            const images = await Docker.searchImage(name);
            return res.json(images);
        }catch (err) {
            return res.json({"error": err});
        }
    }
}