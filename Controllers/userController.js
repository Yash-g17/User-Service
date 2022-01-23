const mongoose = require('mongoose')
const User = mongoose.model('User')
const fs = require('fs')
var userController = {}
const csv = require('csvtojson')
var ObjectId = require('mongodb').ObjectID;

userController.createUser = (req, res) => {
    User1 = new User();
    User1.firstname = req.body.firstname;
    User1.lastname = req.body.lastname;
    User1.emailid = req.body.emailid;
    User1.phonenum = req.body.phonenum;
    User1.save((err, doc) => {
        if (!err) {
            console.log(doc);
            res.send("User Created")
        }
        else {
            console.log(err);
            if (err.name == "ValidationError") {
                res.send("Validation error , send valid parameters and try again");
            }
        }
    })
}

userController.showUsers = (req, res) => {
    User.find({}).exec((err, users) => {
        if (err) res.send("there was an error");
        else res.send(users)
    })
}

userController.updateUser = (req, res) => {
    User.find({ _id: req.body.id }).exec((err, user) => {
        if (user == null)
            res.send("user does not exist");
    })
    User.findByIdAndUpdate(req.body._id, { $set: { firstname: req.body.firstname, lastname: req.body.lastname, emailid: req.body.emailid, phonenum: req.body.phonenum } }, { new: true }, function (err) {
        if (!err) {
            res.send("updated succesfully");
        }
        else {
            if (err.name == "ValidationError") {
                res.send("Validation error , send valid parameters and try again");
            }
        }
    })
}

userController.delete = (req, res) => {
    User.deleteOne({ "id": req.body.id }).exec((err, user) => {
        if (err) res.send("there was some error")
        else
            res.send(user)
    })
}