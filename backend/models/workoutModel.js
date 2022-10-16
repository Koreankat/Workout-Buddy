const mongoose = require("mongoose")

const Squema = mongoose.Schema

const workoutSquema = new Squema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model("Workout", workoutSquema)
