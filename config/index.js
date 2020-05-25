//CONFIGURACION DEL APP
require("dotenv").config();


const config = {
    environment: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    salt: process.env.SALT,
    token_secret: 'supermario',
    dbname: process.env.DB_DATABASE,
    dbcone: process.env.DB_CONNECTION,
    dbhost: process.env.DB_HOST

};

module.exports = config;

