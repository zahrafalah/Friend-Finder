// required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {
    // console.log('Enter htmlRoutes.js');
    	
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
	
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};