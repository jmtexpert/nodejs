const { getsession } = require("../services/auth");

function Restrictlogin(req, res, next) {
    // console.log(req.cookies);
    
    const token = req.cookies?.uuid; // Correct usage

    if (!token) {
        return res.redirect('/login');
    }

    const user = getsession(token);

    if (!user) {
        return res.redirect('/login');
    }

    req.user = user;
    next();
}

function CheckAuth(req, res, next) {
    // console.log(req.cookies);
    
    const token = req.cookies?.uuid; // Correct usage

    if (!token) {
        return res.redirect('/login');
    }

    const user = getsession(token);

    if (!user) {
        return res.redirect('/login');
    }

    req.user = user;
    next();
}


module.exports = Restrictlogin;
