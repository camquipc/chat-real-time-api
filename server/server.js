const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const server = express();
const api = require('../src/routers/route');
const db = require('../src/db/conexion');
const { port, environment } = require('../config');

//Seguridad en express
server.use(helmet());

//soporte para cors
server.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));

server.use(bodyParser.urlencoded({
    extended: false
}));
server.use(bodyParser.json({
    limit: "300kb"
}));


server.use(function (req, res, next) {
    if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
        return res.sendStatus(204);
    }
    return next();
});

//usando las rutas
server.use("/api/v1/", api);

if (environment == 'test') {
    server.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
}

module.exports = server;

