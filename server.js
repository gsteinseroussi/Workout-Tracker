const express = require("express");
const mongoose = require("mongoose");
const Workout = require("./models");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbWorkout", {
  useNewUrlParser: true,
});
//html routes
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/exercise", (req, res) => {
res.sendFile(path.join(__dirname, "/public/exercise.html"));
});
app.get("/stats", (req, res) => {
res.sendFile(path.join(__dirname, "/public/stats.html"));
});

//api routes
app.post("/submit", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
