const express = require("express")
const cors = require("cors")

const jsonReader = require("./utils")

const {addBike} = jsonReader

const api = require("./api")
const path = require("path");

const app = express()

app.use(cors())

app.use("/bikes", api.bikes)

app.use((_,res)=>{
    res.status(404).json({
        status:"error",
        code: 404,
        message:"Not found"
    })
})

// const newBike={
//     name:" qweqw",
//     type:"adfqd",
//     id: 122
// }
// const pathBikeData = path.join(__dirname,"data","bikes.js")

// addBike(pathBikeData,newBike)

app.listen(4001)