 //using express in our app
 var express = require('express');
 var fs = require('fs');
 var app = express(); 
 //app is the variable containing all the information for our server
 
 
 app.get('/', function(req, res)
 {
	 res.sendFile(__dirname + "/index.html");
 });
 

 app.get('/1', function(req, res)
 {
	res.send("Endpoint_1");
 });
 
 app.get('/2', function(req, res)
 {
	 
 });
 
 app.listen(3000);