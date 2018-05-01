
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

    // Add new friend entry
	app.post('/api/friends', function(req, res) {
        
		var userInput = req.body;
        // console.log('JSON.stringify(userInput));
        
		var userResponses = userInput.scores;
        // console.log(userResponses);
        
		// best friend match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; // Make the initial value big for comparison

		// all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			// console.log(JSON.stringify(friends[i]));
			// differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			// console.log(diff);

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				// console.log(diff);
                // console.log(friends[i].name);
				// console.log(friends[i].photo);

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
        }

		// Add new user
		friends.push(userInput);

		// Send response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
}