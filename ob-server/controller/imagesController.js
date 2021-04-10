const Docker = require('../src/docker/index.js');
const DockerParse = require('../src/docker/dockerParser.js');
const { Logger } = require('logger');
consr Logger = require('logger');
module.exports = {
    async getAllImages(req, res, next){
        try{
            const images = await Docker.getAllImages();
            return res.json({images});
        }catch(err) {
            Logger.error(`To get locally images - ${err}`);
            return res.json({"error": err});
        }
    },

    async getSimpleImages(req, res, next){
        try{
            const images = await Docker.getAllImages();
            let simpleImages = [];
            images.forEach(el => { simpleImages.push(DockerParse.reduceImageData(el.Id ,el.RepoTags)); });
            return res.json({simpleImages});
        }catch(err) {
            Logger.error(`To get locally images ligth - ${err}`);
            return res.json({"error": err});
        }
    },

    async searchImages(req, res, next) {
        try{
            const name = req.query.term;
            const images = await Docker.searchImage(name);
            return res.json(images);
        }catch (err) {
            Logger.error(`To search images - ${err}`);
            return res.json({"error": err});
        }
    },

    async pullImagesFromHub(req, res, next) {
        try{
            const tag = req.query.tag;
            const name = req.query.name;
            const response = await Docker.pullImageFromHub(name, tag);
            console.log(response);
            // return res.json(images);
        }catch (err) {
            Logger.error(`To pull image - ${err}`);
            return res.json({"error": err});
        }
    },
}