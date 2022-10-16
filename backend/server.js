const express = require("express")
const workoutRoutes = require("./routes/workout")
const mongoose = require("mongoose")
require("dotenv").config()
//express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use("/api/workouts", workoutRoutes)

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log(" coonected to db & listening on port", process.env.PORT)
    })
  })
  .catch((err) => console.log(err))

process.env
