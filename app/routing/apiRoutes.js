
// required dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	// console.log('Enter apiRoutes.js');

	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
    })
}