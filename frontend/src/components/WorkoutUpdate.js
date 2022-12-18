import { useEffect } from "react"

import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutUpdate = ({ workout, isUpdating }) => {
  const { workouts, dispatch } = useWorkoutsContext()
  let id = isUpdating
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        "https://workout-1xok.onrender.com/api/workouts/" + id
      )
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json })
      }
    }

    fetchWorkouts()
  }, [dispatch, id])
  const handleUdpdate = async () => {
    const response = await fetch(
      "https://workout-1xok.onrender.com/api/workouts/" + workouts._id,
      {
        method: "PATCH",
      }
    )
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: "PATCH_WORKOUT", payload: json })
    }
  }
  const handleTitle = (e) => {
    e.preventDefault()
    workouts.title = e.target.value
  }
  return (
    <form onSubmit={handleUdpdate}>
      <input value={workouts.title || ""} onChange={handleTitle} />
      <button type='submit'>change</button>
    </form>
  )
}
export default WorkoutUpdate
