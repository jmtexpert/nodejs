const express = require('express');
const { Home,Signup ,Login} = require('../contoller/staticcontroller');
const staticroute = express.Router()
const Restrictlogin = require("../middleware/auth");

// staticroute.get('/',(req,res)=>{
//     res.render('home')

// })

staticroute.get('/',Restrictlogin,Home)
staticroute.get('/signup',Signup)
staticroute.get('/login',Login)

module.exports = {
    staticroute
}