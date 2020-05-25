const User = require('../models/usersM');

module.exports = {
    
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
    	
    	let user = new User(
    		{
			  name : {
			    first: req.body.name.first,

        		last: req.body.name.last
			  },
			    
			  email : req.body.email,
			    password :req.body.password
			}
    	);

    	user.save().then( user => {

    		res.status(201).json( user);

    	}).catch( error => console.log(error));
    },

    update(req , res) {

    	User.findByIdAndUpdate( req.params.id, req.body ,(err, user) => {
		   
		    if (err) {

		    	return res.status(500).json(err);
		    }

		    return res.status(200).json(user);
		  }
		);
    },

    delete(req , res){

    	User.deleteOne({ _id: req.params.id }).then( user => {

    		res.status(200).json(user);

    	}).catch( error => console.log(error));
    }
};



