const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Invalid email");
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minLength: 7,
//     validate(value) {
//       if (value.toLowerCase().includes("password"))
//         throw new Error("Password must not include the term 'password'.");
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) throw new Error("Age must be a positive number");
//     },
//   },
// });

// const me = new User({
//   name: "  Robin     ",
//   email: "RoBinC@OnE.dK",
//   password: "password1",
// });
//
// me.save()
//   .then((res) => {
//     console.log("Success!", res);
//   })
//   .catch((err) => {
//     console.log("Error! ", err);
//   });

const Task = mongoose.model("Task", {
  desc: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const item = new Task({ desc: "        This is task description     " });
item
  .save()
  .then((res) => {
    console.log("Success", res);
  })
  .catch((err) => {
    console.log("Error", err);
  });
