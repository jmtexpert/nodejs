const URLschema = require("../model/url")


async function Home(req, res) {
    const data =await  URLschema.find({})
    return res.render('home',{
        data
    });
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
