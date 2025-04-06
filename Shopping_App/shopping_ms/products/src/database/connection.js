const mongoose = require('mongoose');
const { DB_URL } = require('../config');

module.exports = async () => {

    try{
        await mongoose.connect(DB_URL);
        console.log('database connected');
    }catch(error) {
        console.log('error->');
        console.log(error);
        process.exit(1);
    }
};
