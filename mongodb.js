// CRUD operations

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, { useNewURLParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect DB!");
  }
  const db = client.db(databaseName);

  /* Delete Many operator */
  db.collection("tasks")
    .deleteMany({ desc: "Finalise PHP PPT" })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  /* Testing delete operator of MongoDB */
  // db.collection("users")
  //   .deleteMany({ age: 33 })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  /* Testing UpdateMany operator of MongoDB */

  // db.collection("tasks")
  //   .updateMany(
  //     { complete: false },
  //     {
  //       $set: {
  //         complete: true,
  //       },
  //     }
  //   )
  //   .then((res) => {
  //     console.log("Success: " + res);
  //   })
  //   .catch((err) => {
  //     console.log("Error: " + err);
  //   });

  /* Tested MongoDB promise and basic update operators */

  // db.collection("users")
  //   .updateOne(
  //     {
  //       _id: new ObjectID("6197ac869f88962b2ab1e910"),
  //     },
  //     {
  //       $inc: {
  //         age: 2,
  //       },
  //     }
  //   )
  //   .then((res) => {
  //     console.log("Update successful: " + res);
  //   })
  //   .catch((err) => {
  //     console.log("Error in updating : " + err);
  //   });
});
