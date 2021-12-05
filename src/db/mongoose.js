const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   },
// });
//
// const me = new User({ name: "Robin", age: 32 });
//
// me.save()
//   .then((res) => {
//     console.log("Success!", res);
//   })
//   .catch((err) => {
//     console.log("Error! ", err);
//   });

const Task = mongoose.model("Task", {
  desc: String,
  completed: Boolean,
});

const item = new Task({ desc: "This is task description", completed: false });
item
  .save()
  .then((res) => {
    console.log("Success", res);
  })
  .catch((err) => {
    console.log("Error", err);
  });
