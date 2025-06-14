const express = require("express");
const cookieParser = require('cookie-parser')
const { Client } = require('ssh2');
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


app.use(express.json());

app.post('/run', (req, res) => {
  const { host, username, password, command } = req.body;
    console.log(host);
    
  const conn = new Client();
  conn.on('ready', () => {
    conn.exec(command, (err, stream) => {
      if (err) return res.status(500).send(err.message);

      let output = '';
      stream.on('data', (data) => output += data.toString());
      stream.stderr.on('data', (data) => output += data.toString());
      stream.on('close', () => {
        conn.end();
        res.send(output);
      });
    });
  }).on('error', (err) => {
    res.status(500).send('SSH Connection Failed: ' + err.message);
  }).connect({ host, port: 65002, username, password });
});

app.listen(port,()=>{
    console.log('server run successfully ');
    
})