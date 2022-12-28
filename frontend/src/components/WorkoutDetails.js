import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import WorkoutUpdate from "./WorkoutUpdate";

//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useState } from "react";
const WorkoutDetails = ({ workout, setIsUpdating }) => {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutsContext();

  const handleDelete = async () => {
    if (!user) {
      return;
    }
    const response = await fetch(
      "https://workout-1xok.onrender.com/api/workouts/" + workout._id,
      {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div>
      <div className={`workout-details`}>
        <h4>{workout.title}</h4>
        <p>
          <strong>Load (kg): </strong>
          {workout.load}
        </p>
        <p>
          <strong>Number of reps: </strong>
          {workout.reps}
        </p>
        <p>
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </p>

        <span className="material-symbols-outlined" onClick={handleDelete}>
          delete
        </span>
        {/* <Link to='/workout'>
          <p
            className='edit'
            onClick={() => {
              setIsUpdating(workout._id)
            }}
          >
            Edit
          </p>
        </Link> */}
      </div>
    </div>
  );
};

export default WorkoutDetails;
