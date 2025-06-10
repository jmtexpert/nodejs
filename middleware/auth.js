const { getsession } = require("../services/auth");

function Restrictlogin(req, res, next) {
    console.log(req.cookies);
    
    const uuid = req.cookies?.uuid; // Correct usage

    if (!uuid) {
        return res.redirect('/login');
    }

    const user = getsession(uuid);

    if (!user) {
        return res.redirect('/login');
    }

    req.user = user;
    next();
}

module.exports = Restrictlogin;
