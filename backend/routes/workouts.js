const express = require('express')
const Workout  = require('../models/workoutModel.js')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWokrout
} = require('../controllers/workoutController.js')



const router = express.Router()

    //GET All wortkouts
    router.get('/',getWorkouts)

    //GET a single workout
    router.get('/:id',getWorkout)

    //POST a new workout
    router.post('/', createWorkout)
    //DELETE a new workout
    router.delete('/:id',deleteWorkout)

    //UPDATE a new workout
    router.patch('/:id',updateWokrout)



module.exports = router