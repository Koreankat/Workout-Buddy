const express = require("express")
const router = express.Router()
const {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController")

// GET all workouts
router.get("/", getAllWorkouts)

//GET a single workout
router.get("/:id", getWorkout)

//POST a new workout
router.post("/", createWorkout)

//DELETE workout
router.delete("/:id", deleteWorkout)

//UPDATE workout
router.patch("/:id", updateWorkout)

module.exports = router
