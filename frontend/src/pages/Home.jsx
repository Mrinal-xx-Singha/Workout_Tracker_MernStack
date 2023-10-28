import { useEffect, useState } from "react";

//Components
import WorkoutDetails from "../components/WorkoutDetails.jsx";
import WorkoutForm from "../components/WorkoutForm.jsx";



const Home = () => {


  const [workouts, setWorkouts] =useState(null)


  useEffect(() => {
    const fetchWorkouts = async () => {
      
      const response = await fetch('http://localhost:4000/api/workouts')
      const json = await response.json();

      if(response.ok){
        setWorkouts(json)

      }
    
    }
    fetchWorkouts()
  
    
  }, [])
  


  return (
    <div className="home">
      <div className="workouts">
          {workouts && workouts.map((workout) =>(
           <WorkoutDetails  key={workout._id} workout = {workout}/>
          ))}
         
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
