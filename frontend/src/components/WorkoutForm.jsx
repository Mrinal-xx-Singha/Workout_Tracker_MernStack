import { useState } from "react"

import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";




const WorkoutForm = () => {

    const {dispatch} = useWorkoutsContext()

    const [title,setTitle] = useState('')
    const [load,setLoad] = useState('')
    const [reps,setReps] = useState('')
    const [error,setError] = useState(null)
    const [emptyFields,setEmptyFields] = useState([])

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch('http://localhost:4000/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)

        }
        if(response.ok){

            setTitle('')
            setLoad('')
            setReps('')
            setError([])
            console.log('new Workout Added',json)
            dispatch({type: 'CREATE_WORKOUT',payload: json})
        
        }
    }
  
    return (
    <form
    onSubmit={handleSubmit}
    className="create"
    >
        <h3>Add a new Workout</h3>

        <label >Exercise Title:</label>
        <input type="text"
        onChange={(e) =>{
            setTitle(e.target.value)
        }}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
        />
        <label >Load (in kg):</label>
        <input type="number"
        onChange={(e) =>{
            setLoad(e.target.value)
        }}
        value={load}
        className={emptyFields.includes('load') ? 'error' : ''}

        />
        <label >Exercise Reps:</label>
        <input type="number"
        onChange={(e) =>{
            setReps(e.target.value)
        }}
        value={reps}
        className={emptyFields.includes('reps') ? 'error' : ''}
        />
        <button>
            Add Workout
        </button>
        {error && <div className="error"> {error}</div>}

    </form>
  )
}

export default WorkoutForm
