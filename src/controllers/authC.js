const User = require('../models/usersM');
const service = require('../services');
const bcrypt = require('bcrypt-nodejs');


module.exports = {

	login(req, res) {

		//creamos el token

		User.find({ email: req.body.email }).then(user => {

			let token = service.Token(user);

			res.status(200).json({ api_token: token });

		}).catch(error => console.log(error));

	},

	singup(req, res) {

		//registrar optener token
		let user = new User(
			{
				name: {
					first: req.body.name.first,

					last: req.body.name.last
				},

				email: req.body.email,
				password: req.body.password
			}
		);

		user.save().then(user => {

			res.status(201).json(user);

		}).catch(error => console.log(error));
	}
}

