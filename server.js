/*jshint node:true*/
"use strict";
var express = require("express");
var app = express();
// var serveStatic = require('serve-static')
var path = require("path");

var port = process.env.PORT || 3000;
app.use(express.static("."));
// app.use(serveStatic(express.static('dist')));
// app.use("/*", express.static("index.html"));
app.get("/*", function(req, res, next) {
  //Path to your main file
  res.status(200).sendFile(path.join(__dirname + "/index.html"));
});
console.log("About to crank up node");
app.listen(port, function() {
  console.log("Express server listening on port " + port);
});
