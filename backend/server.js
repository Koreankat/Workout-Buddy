const express = require("express")
const mongoose = require("mongoose")
const workoutRoutes = require("./routes/workout")
const userRoutes = require("./routes/user")
require("dotenv").config()

// express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//route
app.use("/api/workouts", workoutRoutes)
app.use("/api/user", userRoutes)

//db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port", process.env.PORT)
    })
  })
  .catch((err) => console.log(err))

process.env
