//conexion db

const mongoose = require('mongoose');
const { dbname, dbcone, dbhost } = require('../../config/');

const db_con = mongoose.connect(`${dbcone}://${dbhost}/${dbname}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function (err) {
        if (err) throw err;
        console.log('Successfully connected to MongoDB');
    });

module.exports = db_con;
