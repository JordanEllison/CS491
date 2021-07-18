const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function(req, res, next) {
	var baseUrl = "https://jobs.github.com/positions.json?description=python";

	request(baseUrl, function(error, response, body) {
		if (!error) {
			if (response.statusCode == 200) {
				// successful URL request with no errors
				var serializedResponse = JSON.parse(body);
				var toSend = new Array;
				for (var i = 0; i < 10; i++ ) {
					toSend[i] = serializedResponse[i];
				}
				res.send(toSend);
			}
			else {
				console.log("GitHub Jobs API responded with an improper status code.");
			}
		}
		else {
			console.log("Error caught with URL request.");
		}
	});
});

module.exports = router;
