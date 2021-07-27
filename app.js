const express = require("express")
const cors = require("cors")

const jsonReader = require("./utils")

const {addBike} = jsonReader

const api = require("./api")

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

const newBike={
    name:" qweqw",
    type:"adfqd",
    id: 122
}

addBike(newBike)

app.listen(4002)