const express = require("express");
const mongoose = require("mongoose");
const router = require("express").Router();
const Workout = require("../models/Workout.js");

//api routes
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.update({ _id: req.params.id }, { $push: { exercises: [req.body] } })
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => console.log(err));
});

router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
