const express = require('express')

// create router for express
const router = new express.Router()

// import controller
const userController = require('../Controller/userController');

router.post('/user/register',userController.register)


// export router
module.exports = router;