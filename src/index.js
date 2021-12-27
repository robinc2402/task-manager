const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    console.log("Error while saving ", e);
    res.status(400).send(e);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).send();
    }
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const task = await new Task(req.body);
    res.status(201).send(task);
  } catch (e) {
    console.log("Error while saving ", e);
    res.status(400).send(e);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    if (!tasks) {
      res.status(404).send();
    }
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/tasks/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const tasks = await Task.findById(id);
    if (!tasks) {
      res.status(404).send();
    }
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
