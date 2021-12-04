// CRUD operations

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");
const { log } = require("nodemon/lib/utils");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, { useNewURLParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect DB!");
  }
  const db = client.db(databaseName);

  db.collection("tasks").findOne(
    { _id: new ObjectID("61878ee635281699804ca61c") },
    (err, res) => {
      if (err) {
        return console.log(
          "Unable to fetch any document with ID --> 61878ee635281699804ca61c"
        );
      }
      console.log(res);
    }
  );

  db.collection("tasks")
    .find({ complete: false })
    .toArray((err, res) => {
      if (err) {
        return console.log(
          "Unable to fetch any documents with the given expression"
        );
      }
      console.log(res.length);
    });
});
