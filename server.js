// Create the MySQL connection object
//  var connection;

// if (process.env.JAWSDB_URL) {
// 	// DB is JawsDB on Heroku
	// connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// 	// DB is local on localhost
	// connection = mysql.createConnection({
		// port: 3306,
		// host: 'localhost',
		// user: 'root',
		// password: '',
		// database: 'friendFinder_db'
	// })
// };

var mysql = require("mysql");
require("dotenv").config();

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  dateStrings: true,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;



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