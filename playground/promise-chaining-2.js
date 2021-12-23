require("../src/db/mongoose");
const Task = require("../src/models/task");

// Goal - Mess around with promise chaining
// 1. Create a promise-changing-2.js
// 2. Load in Mongoose and Task model
// 3. Remove a given task by id
// 4. Get and print the total number of incomplete tasks
// 5. Test your work.

// Task.findByIdAndDelete("61c4593c0a7e8bd28b81649f")
//   .then((res) => {
//     console.log("Deleted 61c4593c0a7e8bd28b81649f", res);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const taskDeleteAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  // if (!task) {
  //   return Promise.reject("Could not find/delete task with given iD", id);
  // }
  const count = await Task.countDocuments({ completed: false });
  return count;
};

// 61ae0a311afc0e8b6e343a4a
taskDeleteAndCount("61ae0a311afc0e8b6e343a4a")
  .then((res) => {
    console.log("Count of incomplete tasks ", res);
  })
  .catch((e) => {
    console.log("e", e);
  });
