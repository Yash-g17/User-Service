var express = require('express')
var router = express.Router();
const user = require('../Controllers/userController')

//add a user 
router.post('/adduser', (req, res) => {
    user.createUser(req, res)
})

//show a user 

router.get('/find', (req, res) => {
    user.finduser(req, res)
})
// show all the users

router.get('/listusers', (req, res) => {
    user.showUsers(req, res)
})

// update user 

router.post('/updateuser', (req, res) => {
    user.updateUser(req, res)
})

//delete user 
router.delete('/deleteuser', (req, res) => {
    user.delete(req, res)
})

module.exports = router