const express = require('express');
const { Home } = require('../contoller/staticcontroller');
const staticroute = express.Router()

// staticroute.get('/',(req,res)=>{
//     res.render('home')

// })

staticroute.get('/',Home)

module.exports = {
    staticroute
}