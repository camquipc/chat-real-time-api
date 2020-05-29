const User = require('../models/usersM');

const moment = require('moment');

module.exports = {
     
    index(req, res) {


    	User.find({ online: true }).then( users => {

    		res.status(200).json( users);

    	}).catch( error => console.log(error));

    },

    show(req, res) {

    	User.findById({ _id: req.params.id }).then( user => {

    		res.status(200).json(user);

    	}).catch( error => console.log(error));
    	
    },

    store(req , res) {

		const {username , password } = req.body;
       
        const avatar = `http://gravatar.com/avatar/${moment().unix()}?d=identicon` || '' ;
    	
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

            res.status(500).json(error)
        );
    },

    update(req , res) {

        User.findByIdAndUpdate( req.params.id, {online:true} ,(err, user) => {
           
            if (err) {

                return res.status(500).json(err);
            }

            return res.status(200).json(user);
          }
        );
    }
};



