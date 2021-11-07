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

  // insert a single document and know its result with a callback
  // db.collection("users").insertOne(
  //   {
  //     name: "ADavid",
  //     age: 22,
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Unable to insert user");
  //     }
  //     console.log(result);
  //   }
  // );

  // insert multiple docs
  // db.collection("users").insertMany(
  //   [
  //     { name: "DeepakR", age: 33 },
  //     { name: "AnkitT", age: 33 },
  //     { name: "AkshatT", age: 33 },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Unabled to insert docs");
  //     }
  //     console.log(result);
  //   }
  // );

  // challenge
  db.collection("tasks").insertMany(
    [
      {
        desc: "Prepare migration endpoints",
        complete: false,
      },
      {
        desc: "Finalise PHP PPT",
        complete: false,
      },
      {
        desc: "Migration architecture diagram",
        complete: true,
      },
    ],
    (err, res) => {
      if (err) {
        return console.log("Unable to insert tasks");
      }
      console.log(res);
    }
  );
});
