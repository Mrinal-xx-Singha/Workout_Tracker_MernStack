require('dotenv').config()



const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')

const cors = require("cors")

// Express App
const app = express();

//middleware
app.use(cors())
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next();
})


// routes
app.use('/api/workouts',workoutRoutes)


//CONNECT TO DB

mongoose.connect(process.env.MONGODBURL)
.then((req, res) =>{

    //Listen for request
    app.listen(process.env.PORT, () =>{
        console.log("connected to db and Listening on port 4000!!")
    })    

})
.catch((error) =>{
    console.log(error)
})




//Listen  For request

// app.listen(process.env.PORT, () =>{
//     console.log("Listening on port 4000!!")
// })















