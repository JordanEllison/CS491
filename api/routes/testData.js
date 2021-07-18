var express = require('express');
var router = express.Router();
const { mongoURI } = require('../keys');

const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://Jordan:nGxLypyJ1l7hMH1O@cluster0.f76xf.mongodb.net/tindeResume?retryWrites=true&w=majority";

const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db("tinderesume");
    const collection = database.collection("Users");
    const query = { Name: { $eq: "jordan" } };
    const options = {
      // sort returned documents in ascending order by title (A->Z)
      sort: { title: 1 },
    // Include only the `title` and `imdb` fields in each returned document
      projection: { _id: 0, title: 1, imdb: 1 },
    };
    const cursor = collection.find(query, options);
    // print a message if no documents were found
    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    }
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);


module.exports = router;