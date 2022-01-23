const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    emailid: {
        type: Date
    },
    phonenum: {
        type: Number
    }
})

mongoose.model('User', userSchema)