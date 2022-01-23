const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/UserDB', { useNewUrlParser: true }, (err) => {
    if (!err) console.log("connected mongodb");
    else console.log('error in connection ' + error);
})

require('./user.model.js');