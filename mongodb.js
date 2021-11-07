// CRUD operations

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, { useNewURLParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect DB!");
  }
  const db = client.db(databaseName);
  db.collection("users").insertOne(
    {
      name: "ADavid",
      age: 22,
    },
    (error, result) => {
      if (error) {
        return console.log("Unable to insert user");
      }
      console.log(result);
    }
  );
});
