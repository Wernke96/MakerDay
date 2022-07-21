require('dotenv').config();
var express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.listen(process.env.PORT_WEB || 50000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const controller = require('./router');



app.get('/message', controller.message);
