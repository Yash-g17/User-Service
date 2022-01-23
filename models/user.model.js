const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    emailid: {
        type: String
    },
    phonenum: {
        type: Number
    }
})

mongoose.model('User', userSchema)