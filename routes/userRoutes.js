var express = require('express')
var router = express.Router();
const user = require('../Controllers/userController')

//add a user 
router.post('/adduser', (req, res) => {
    console.log("/adduseriscalled");
    user.createUser(req, res)
})

//show a user 

router.post('/find', (req, res) => {
    console.log("/findiscalled");
    user.finduser(req, res)
})

// show all the users

router.get('/listusers', (req, res) => {
    console.log("listusersiscalled");
    user.showUsers(req, res)
})

// update user 

router.post('/updateuser', (req, res) => {
    console.log("/updateuseriscalled");
    user.updateUser(req, res)
})

//delete user 
router.delete('/deleteuser', (req, res) => {
    console.log("/deleteuseriscalled");
    user.delete(req, res)
})

module.exports = router