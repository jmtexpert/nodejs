const express = require('express');
const  {Signuphandler,Loginhandler} = require('../contoller/user');
const Userroute = express.Router()


Userroute.post('/signup',Signuphandler)
Userroute.post('/login',Loginhandler)


module.exports = {
    Userroute
}