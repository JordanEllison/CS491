var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', function(req, res, next) {
    request('localhost:5000/users/1/saveJob', function(error, response, body) {
        if(!error) {

        }
    });
    res.send('API is working properly');
});

module.exports = router;