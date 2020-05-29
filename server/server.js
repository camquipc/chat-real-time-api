


const express = require('express');
const app = express();
const http = require("http");
const socketIo = require("socket.io");


const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');

const moment = require('moment');

const server = http.createServer(app);
const io = socketIo(server); 


const api = require('../src/routers/route');
const db = require('../src/db/conexion');
//const socket = require('./src/socketConect');

const Chat = require('../src/models/chatsM');


const { port, environment } = require('../config');





//Seguridad en express
app.use(helmet());

//soporte para cors
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json({
    limit: "300kb"
}));


app.use(function (req, res, next) {
    if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
        return res.sendStatus(204);
    }
    return next();
});

//usando las rutas
app.use("/api/", api);


//socket.oi

io.on("connection", async ( socket ) => {


   const messages = await Chat.find().sort({createdAt:-1}).populate('userId');

   if(messages.length > 0 ) {
     io.emit('messages_' , {messages});
    
   } else {
     io.emit('messages_' , {messages});
   }


   socket.on('disconnect', function(){
        console.log('user disconnected');
    });

});



if (environment == 'test') {
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
}

module.exports = server;

