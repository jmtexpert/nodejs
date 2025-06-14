const jwt = require('jsonwebtoken')
const secret = 'mubi123'
function setsession(user){
   const payload = {
      id:user._id,
      email:user.email,
      role:user.role
   }
   return jwt.sign(payload, secret)
}
function getsession(token){
   try {
    return jwt.verify(token, secret); // Returns payload (e.g., user info)
  } catch (err) {
    return null; // Invalid token
  }
}
 module.exports={
    setsession,
    getsession
 }