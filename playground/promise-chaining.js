require("../src/db/mongoose");
const User = require("../src/models/user");

// 61c4679c25abec3e09201a6b

// task: find a user with given ID then update his/her age to 21 and count many users with same age are there.
// We'll first use a Promise to find and Update the age then will chain another Promise to count same age users.

User.findByIdAndUpdate("61c4679c25abec3e09201a6b", { age: 21 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 21 });
  })
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
