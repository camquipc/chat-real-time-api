//conexion db

const mongoose = require('mongoose');
const { dbname, dbcone, dbhost } = require('../../config/');

const db_con = mongoose.connect(`mongodb://mario:mario2020@ds131903.mlab.com:31903/realtime`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function (err) {
        if (err) throw err;
        console.log('Successfully connected to MongoDB');
    });

module.exports = db_con;

//${dbcone}://${dbhost}/${dbname}