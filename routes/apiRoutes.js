const express = require("express");
const Workout = require("../models/Workout.js");
const app = express();

//api routes
app.post("/api/workouts", async (req, res) => {
  const workout = new Workout(req.body);

  try {
    await workout.save();
    res.send(workout);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/workouts", async (req, res) => {
  const workouts = await Workout.find({});

  try {
    res.send(workouts);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/workouts/:id", async (req, res) => {
  const workout = await Workout.findOne({ _id: req.params.id });

  try {
    res.send(workout);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch("/api/workouts/:id", async (req, res) => {
  try {
    await Workout.findByIdAndUpdate(req.params.id, req.body);
    await Workout.save();
    res.send(workout);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
