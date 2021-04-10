require('dotenv').config();
const Utils = require('../utils/utils.js');
const host = process.env.DOCKER_IP;
const port = process.env.DOCKER_PORT;
const Logger = require('logger').createLogger();

module.exports = {
    async getAllImages(){
        return new Promise((resolve, reject) => {
            const httpOptions = Utils.httpOptions(host, '/images/json', port, 'GET');
            Utils.httpRequest(httpOptions)
            .then((data) => { 
                resolve(JSON.parse(data)); 
            })
            .catch((err) => {
                console.log(err.status);
                reject(JSON.parse(err));
            })
        })
    },

    async searchImage(name){
        return new Promise((resolve, reject) => {
            const httpOptions = Utils.httpOptions(host, `/v1.24/images/search?term=${name}&limit=5`, port, 'GET');
            Utils.httpRequest(httpOptions)
            .then((data) => { resolve(JSON.parse(data)); })
            .catch((err) => {
                console.log(err.status);
                reject(JSON.parse(err));
            })
        })
    },

    async pullImageFromHub(name, tag = 'latest'){
        return new Promise((resolve, reject) => {
            const httpOptions = Utils.httpOptions(host, `/v1.24/images/create?fromImage=${name}=${tag}`, port, 'POST');
            Utils.httpRequest(httpOptions)
            .then((data) => { resolve(JSON.parse(data)); })
            .catch((err) => {
                Logger.error(err);
                reject(JSON.parse(err));
            })
        })

    }
}