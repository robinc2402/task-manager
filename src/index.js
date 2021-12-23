const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      console.log("Error while saving ", e);
      res.status(400).send(e);
    });
});

app.get("/users", (req, res) => {
  const users = User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  const user = User.findById(id)
    .then((user) => {
      if (!user) {
        res.status(404).send();
      }
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((e) => {
      console.log("Error while saving ", e);
      res.status(400).send(e);
    });
});

app.get("/tasks", (req, res) => {
  Task.find({})
    .then((tasks) => {
      if (!tasks) {
        res.status(404).send();
      }
      res.status(200).send(tasks);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.get("/tasks/:id", (req, res) => {
  const id = req.params.id;
  Task.findById(id)
    .then((tasks) => {
      if (!tasks) {
        res.status(404).send();
      }
      res.status(200).send(tasks);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
