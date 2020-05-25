const jwt = require('jwt-simple');
const moment = require('moment');
const { token_secret } = require('../../config');

exports.Token = function (user) {

  let payload = {
    user: user,
    exp: moment().add(10, "days").unix()
  };

  return jwt.encode(payload, token_secret);
};