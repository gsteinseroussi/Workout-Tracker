const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
day: {
type: Date,
  default: Date.now,
},
  exercises: [{
type: {
type: String,
trim: true
},
name: {
type: String,
  trim: true
},
  duration: Number,
  weight: Number,
  sets: Number,
  reps: Number,
  distance: Number,
  }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
models.exports(Workout);
