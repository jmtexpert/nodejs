const express = require('express');
const  {UrlSubmit,GotoLink  ,Analyticsdata} = require('../contoller/url');
const route = express.Router()


route.post('/',UrlSubmit)
route.get('/:shortId',GotoLink)
route.get('/analytics/:id', Analyticsdata);


module.exports = {
    route
}