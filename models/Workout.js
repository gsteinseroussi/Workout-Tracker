const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

WorkoutSchema.methods.totalDuration = function () {
  let totalDuration = 0;
  this.exercises.forEach(function (exercise) {
    console.log(exercise.duration);
    totalDuration += exercise.duration;
  });
  return this.totalDuration;
};

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
