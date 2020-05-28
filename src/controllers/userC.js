const User = require('../models/usersM');

module.exports = {
     var clients = io.engine.clientsCount;
    index(req, res) {


    	User.find().then( users => {

    		res.status(200).json( users);

    	}).catch( error => console.log(error));

    },

    show(req, res) {

    	User.findById({ _id: req.params.id }).then( user => {

    		res.status(200).json(user);

    	}).catch( error => console.log(error));
    	
    },

    store(req , res) {

		const {username , password , avatar } = req.body;

    	
    	let user = new User(
    		{
				username: username,

				password:password,
			
				avatar: avatar 
			}
    	);
    	user.save().then( user => {

    		res.status(201).json(user);

    	}).catch( error => 

            res.status(500).json({
                "error": "error"
            })
        );
    }
};



