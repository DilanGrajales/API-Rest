const mongoose = require('mongoose');
const colors = require('colors');

mongoose.connect(process.env.MONGODB_URL, (err) => {
    if (!err) {
        console.log('MongoDB connection succeeded'.green);
    } else {
        console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2).red);
    }
});

require('./user.model');