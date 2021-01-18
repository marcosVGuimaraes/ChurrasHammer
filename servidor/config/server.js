var express = require('express');

var consign = require('consign');

var bodyParser = require('body-parser');

var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(expressValidator());

app.use(function(req, res, next) {
	
	res.setHeader("Access-Control-Allow-Origin","*");	
	res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");	
	res.setHeader("Access-Control-Allow-Headers","content-type");	
	res.setHeader("Access-Control-Allow-Credentials", true);	

	next();
})

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;