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

app.put("/api/workouts/:id", async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    const newExercise = req.body;
    workout.exercise.push(newExercise);
    await workout.save();
    res.send(workout);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;