const { Router } = require('express');
const api = Router();
const userCtrl = require("../controllers/userC");
const authCtrl = require("../controllers/authC");
const chatCtrl = require("../controllers/chatC");
const auth = require("../auth");

//USUARIO
api.get("/users", auth.Auth, userCtrl.index);
api.get("/user/:id", auth.Auth, userCtrl.show);
api.post("/user", auth.Auth, userCtrl.store);
api.put("/user/:id", auth.Auth, userCtrl.update);
api.delete("/user/:id", auth.Auth, userCtrl.delete);

//CHAT
api.get("/messages", auth.Auth, chatCtrl.index);
api.post("/message", auth.Auth, chatCtrl.store);

//NO SOPORTADO 
//api.get("/user/:id", auth.Auth, userCtrl.show);
//api.put("/user/:id", auth.Auth, userCtrl.update);
//api.delete("/user/:id", auth.Auth, userCtrl.delete);



//LOGIN LOGOUT
api.post("/login", authCtrl.login);
api.post("/singup", authCtrl.singup);

//ruta de salir del sistema y  salir del chat opcional
api.post("/singup", authCtrl.singup);


module.exports = api;
