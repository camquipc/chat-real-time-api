const { Router } = require('express');
const api = Router();
const userCtrl = require("../controllers/userC");
const authCtrl = require("../controllers/authC");
const chatCtrl = require("../controllers/chatC");

const auth = require("../auth");

//USUARIO
api.get("/users",auth.Auth , userCtrl.index);
api.get("/user/:id",  auth.Auth , userCtrl.show);
api.put("/user/:id" , userCtrl.update);


//CHAT
api.post("/message", auth.Auth , chatCtrl.store);

//LOGIN LOGOUT
api.post("/login", authCtrl.login);
api.post("/singup", userCtrl.store);



module.exports = api;
