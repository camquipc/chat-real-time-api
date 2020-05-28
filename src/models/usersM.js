const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const config = require('../../config');


const Usuario = new Schema(
  {

    username: { type: String, unique: true, required: true },

    password: { type: String, required: true },

    avatar: { type: String}
  },
  {
    timestamps: true
  }
);



Usuario.pre('save', function (next) {

  const usuario = this;

  if (!usuario.isModified('password')) return next();

  bcrypt.genSalt(config.salt, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(usuario.password, salt, null, function (err, hash) {
      if (err) return next(err);

      usuario.password = hash;

      next();

    });


  });

});



Usuario.methods.attempt = (userPassword, cb) => {

  bcrypt.compare(userPassword, this.password, (err, isMatch) => {

    if (err) {

      return cb(err);
    }

    cb(null, isMatch);

  });

};



module.exports = mongoose.model("Usuario", Usuario);




