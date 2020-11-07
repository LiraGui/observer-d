require('dotenv').config();
const Utils = require('../utils/utils.js');
const host = process.env.DOCKER_IP;
const port = process.env.DOCKER_PORT;

module.exports = {
    getAllImages(){
        return new Promise((resolve, reject) => {
            const httpOptions = {
                host: host,
                path: `/images/json`,
                port: port,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            };

            Utils.httpRequest(httpOptions)
            .then((data) => { 
                resolve(JSON.parse(data));
            })
            .catch((err) => {
                console.log(err.status);
                reject(JSON.parse(err));
            })
        })
    }
}