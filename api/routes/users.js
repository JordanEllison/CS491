var express = require('express');
const { MongoClient } = require('mongodb').MongoClient;
var router = express.Router();
const { mongoURI } = require('../keys');

let users = {
  1: {
    id: '1',
    username: 'Jordan',
  },
  2: {
    id: '2',
    username: 'Jonathan',
  },
  3: {
    id: '3',
    username: 'Maurya'
  },
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(Object.values(users));
});
router.get('/:userId', (req, res) => {
  res.send(users[req.params.userId]);
});
router.post('/:userId/saveJob', (req, res) => {
  MongoClient.connect(mongoURI, function(err, client) {
    if(err) {
         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    const db = client.db("tinderesume");
    db.collection('Users').insertOne(req);
    client.close();
  });
  console.log('saved job');
})
module.exports = router;
