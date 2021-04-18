require('dotenv').config();
const MYSQL_IP = process.env.MYSQL_IP;
const MYSQL_PORT = process.env.MYSQL_PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

module.exports = {
    username: DB_USER,
    password: DB_PASSWORD,
    database: 'observerd',
    host: MYSQL_IP,
    port: MYSQL_PORT,
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
}