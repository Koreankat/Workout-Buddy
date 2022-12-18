import { useEffect, useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

import WorkoutUpdate from "../components/WorkoutUpdate"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = ({ isUpdating, setIsUpdating }) => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        "https://workout-1xok.onrender.com/api/workouts"
      )
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json })
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails
              workout={workout}
              key={workout._id}
              isUpdating={isUpdating}
              setIsUpdating={setIsUpdating}
            />
          ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
