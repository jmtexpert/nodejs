const URLschema = require("../model/url")


async function Home(req, res) {
    const data =await  URLschema.find({})
    return res.render('home',{
        data
    });
}

module.exports = {
    Home
};
