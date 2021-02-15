/*
	Filename: style.css
	Name: Rubleen Singh
	Student ID: 301102088
	Date: 2020-09-7
*/

var port=process.env.PORT || 8080;
var express = require('express');
var app = express();

//Using Routes and the app login in seperate index.js file
var router=require('./routes/index.js');
app.set('view engine', 'ejs');

app.use("/",router);
app.use("/public", express.static(__dirname + '/public'));

app.listen(port);
console.log('Server is up and running at localhost:'+port);

module.exports=app