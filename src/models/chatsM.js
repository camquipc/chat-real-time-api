const mongoose = require("mongoose");
const Usuario = require('./usersM');
const Schema = mongoose.Schema;



//modelo simple de la sala de chat
const Chat = new Schema({

    message: { type:String , require: true },
    userId : { type: Schema.ObjectId, ref: "Usuario" },
    
},
{
   timestamps: true
});

 
module.exports = mongoose.model("Chat", Chat);