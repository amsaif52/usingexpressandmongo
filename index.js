var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	router = require('./routes/index');

var app = express();
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'development';

mongoose.connect("mongodb://localhost/mongoex");
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));


app.use('/',router);



app.listen(port,function(){
	console.log("Listening to port: ",port);
});