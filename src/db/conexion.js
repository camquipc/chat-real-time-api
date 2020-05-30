//conexion db

const mongoose = require('mongoose');
const { dbname, dbcone, dbhost } = require('../../config/');

const db_con = mongoose.connect('mongodb://francisco:francisco1234@ds127982.mlab.com:27982/testchat',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function (err) {
        if (err) throw err;
        console.log('Successfully connected to MongoDB');
    });

module.exports = db_con;



