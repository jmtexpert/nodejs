const express = require('express');
const  {UrlSubmit,GotoLink  ,Analyticsdata,DeleteUrl} = require('../contoller/url');
const route = express.Router()


route.post('/',UrlSubmit)
route.get('/:shortId',GotoLink)
route.get('/analytics/:id', Analyticsdata);
route.get('/delete/:id', DeleteUrl);


module.exports = {
    route
}