const express = require("express");
const { DBCONNECTION } = require("./db_connection");
const { route } = require("./routes/url");
const { staticroute } = require("./routes/staticroutes");
const port = 3000;
const path =require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.set('views', path.resolve('./view'))

DBCONNECTION('mongodb://localhost:27017/url')

app.use('/user',route)
app.use('/',staticroute)


app.listen(port,()=>{
    console.log('server run successfully ');
    
})