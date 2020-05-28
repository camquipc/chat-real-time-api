const User = require('../models/usersM');
const service = require('../services');
const bcrypt = require('bcrypt-nodejs');


module.exports = {

	login(req, res) {

		//creamos el token

		const {username} = req.body;

		User.find({ username: username }).then(user => {

		   let token = service.Token(user);

		   res.status(200).json({ 
		   	"user":user,
		   	"token": token 
		   });
			

		}).catch( error => res.status(500).json(error));

	}
	
}

