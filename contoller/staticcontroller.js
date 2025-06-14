const URLschema = require("../model/url")


async function Home(req, res) {
     const userId = req.user.id;
     const userrole = req.user.role;
     if(userrole == 'ADMIN'){
      
   const data =await  URLschema.find({})
         return res.render('home',{
             data
         });
     }else{
           const data =await  URLschema.find({userId:userId})
         return res.render('home',{
             data
         });
     }
}
async function Signup(req, res) {
    // const data =await  URLschema.find({})
    // return res.render('home',{
    //     data
    // });render
    return res.render('signup')
}
async function Login(req, res) {
    // const data =await  URLschema.find({})
    // return res.render('home',{
    //     data
    // });render
    return res.render('login')
}

module.exports = {
    Home,
    Signup,
    Login
};
