const { default: mongoose } = require("mongoose");

 async function DBCONNECTION(url){
    mongoose.connect(url)
}

module.exports={
    DBCONNECTION
}
