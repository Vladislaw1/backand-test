const express = require("express")
const cors = require("cors")

const jsonReader = require("./utils")

const {addBike} = jsonReader

const api = require("./api")
const path = require("path");

const index = express()

index.use(cors())

index.use("/bikes", api.bikes)

index.use((_, res)=>{
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

index.listen(4001)