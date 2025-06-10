const UserModel = require("../model/user")
const { v4: uuidv4 } = require('uuid');
const { setsession } = require("../services/auth");

async function Signuphandler(req,res){
    const {email ,name,password} = req.body
    if (!email || !name || !password) {
        res.send('data missing')
    }else{
    await UserModel.create({
        name,email,password
    })
    return res.render('login')
}
}

async function Loginhandler(req,res){
    
    const {email ,password} = req.body
    if (!email  || !password) {
        res.send('data missing')
    }else{
   const data = await UserModel.findOne({email ,password})
   if (!data) {
    
       res.send('error')
}
else{
    const sessionid = uuidv4();
    setsession(sessionid,data);
    res.cookie('uuid' ,sessionid)
       return res.redirect('/')
   }
}
}

module.exports = {
    Signuphandler,
    Loginhandler
}