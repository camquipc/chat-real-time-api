const Chat = require('../models/chatsM');

module.exports = {
    
    index(req, res) {


    	Chat.find().then(messages => {

    		res.status(200).json( messages);

    	}).catch( error => console.log(error));

    },

    show(req, res) {

        const {id} = req.params;

    	Chat.findById({ _id: id }).then( chat => {

    		res.status(200).json(chat);

    	}).catch( error => console.log(error));
    	
    },

    store(req , res) {

        const { message , userId } = req.body;
    	
    	let chat = new Chat(
    		{
              message : message,
              userId : userId
			}
    	);

    	chat.save().then( user => {

    		res.status(201).json( chat);

    	}).catch( error => console.log(error));
    },

    update(req , res) {

    	Chat.findByIdAndUpdate( req.params.id, req.body ,(err, user) => {
		   
		    if (err) {

		    	return res.status(500).json(err);
		    }

		    return res.status(200).json(user);
		  }
		);
    },

    delete(req , res){

    	Chat.deleteOne({ _id: req.params.id }).then( user => {

    		res.status(200).json(user);

    	}).catch( error => console.log(error));
    }
};



