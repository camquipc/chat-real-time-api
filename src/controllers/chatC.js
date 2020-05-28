const Chat = require('../models/chatsM');

module.exports = {
    
    store(req , res) {

        const { message , userId } = req.body;
    	
    	let chat = new Chat(
    		{
              message : message,
              userId : userId
			}
    	);

    	chat.save().then( message => {

    		res.status(201).json(message);

    	}).catch( error => console.log(error));
    }
};



