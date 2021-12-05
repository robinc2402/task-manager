// CRUD operations

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, { useNewURLParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect DB!");
  }
  const db = client.db(databaseName);

  db.collection("users")
    .updateOne(
      {
        _id: new ObjectID("6197ac869f88962b2ab1e910"),
      },
      {
        $inc: {
          age: 2,
        },
      }
    )
    .then((res) => {
      console.log("Update successful: " + res);
    })
    .catch((err) => {
      console.log("Error in updating : " + err);
    });
});
