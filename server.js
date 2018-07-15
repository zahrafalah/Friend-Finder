//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Express application
var app = express();
var PORT = process.env.PORT || 8080;

//Access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});