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
  const task = new Task(req.body);
  try {
    task.save();
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

app.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdate = ["name", "email", "password", "age"];
  const isValidUpdate = updates.every((update) => {
    return allowedUpdate.includes(update);
  });

  if (!isValidUpdate) {
    return res.status(400).send({ error: "Invalid update!" });
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["desc", "completed"];

  const isValidUpdate = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidUpdate) {
    return res.status(400).send({ error: "Invalid update attempt!" });
  }

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
