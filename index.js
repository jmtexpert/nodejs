const express = require("express");
const { DBCONNECTION } = require("./db_connection");
const { route } = require("./routes/url");
const port = 3000;


const app = express()

app.use(express.json())

DBCONNECTION('mongodb://localhost:27017/url')

app.use('/user',route)


app.listen(port,()=>{
    console.log('server run successfully ');
    
})