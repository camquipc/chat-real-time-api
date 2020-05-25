const jwt = require('jwt-simple');
const moment = require('moment');
const { token_secret } = require('../config');


exports.Auth = (req, res, next) => {

  if (!req.headers.authorization) {
    return res
      .status(403)
      .send({ message: "Tu no tiene autorización" });
  }

  let tkn = req.headers.authorization.split(" ")[1];


  try {
    let payload = jwt.decode(tkn, token_secret);

    if (payload.exp <= moment().unix()) {
      return res
        .status(401)
        .send({ message: "El token ha expirado" });
    }

    req.user = payload.user;

    next();

  } catch (error) {
    return res
      .status(401)
      .send({ message: "El token no valido!" });
  }

}