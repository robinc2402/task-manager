const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  // useCreateIndex: true,
});

//
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

//
// const item = new Task({ desc: "        This is task description     " });
// item
//   .save()
//   .then((res) => {
//     console.log("Success", res);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });
