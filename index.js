const express = require("express");
const cookieParser = require('cookie-parser')

const { DBCONNECTION } = require("./db_connection");
const { route } = require("./routes/url");
const { staticroute } = require("./routes/staticroutes");
const port = 4000;
const path =require('path');
const { Userroute } = require("./routes/user");
const Restrictlogin = require("./middleware/auth");

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.set('views', path.resolve('./view'))

DBCONNECTION('mongodb://localhost:27017/url')

app.use('/user',Restrictlogin,route)
app.use('/users',Userroute)
app.use('/',staticroute)


app.listen(port,()=>{
    console.log('server run successfully ');
    
})