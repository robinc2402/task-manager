const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
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

taskSchema.pre("save", async function (next) {
  const task = this;
  console.log("Just before saving the task.");
  next();
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
