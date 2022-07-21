require('dotenv').config();
var express  = require('express');
var app = express();
app.listen(process.env.PORT_WEB || 50000 );

app.get('/hello', function(req, res, next){
    
});