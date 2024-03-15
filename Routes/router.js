const express = require('express')
const router = new express.Router()

const usercontroller  = require('../Controllers/usercontroller')


router.post('/user/register',usercontroller.register)

router.post('/user/login',usercontroller.login)


module.exports = router;