const express = require("express")
const cors = require("cors")

const jsonReader = require("./utils")

const {addBike} = jsonReader

const PORT = process.env.PORT || 80

const api = require("./api")
const path = require("path");

const app = express()


app.use(cors())

app.get("/",(req,res)=>{
    res.end(`<p>Home page</p>`)
})

app.use("/bikes", api.bikes)

app.use((_, res)=>{
    res.status(404).json({
        status:"error",
        code: 404,
        message:"Not found"
    })
})

// // const newBike={
// //     name:" qweqw",
// //     type:"adfqd",
// //     id: 122
// // }
// // const pathBikeData = path.join(__dirname,"data","bikes.js")
//
// // addBike(pathBikeData,newBike)
//
app.listen(PORT,()=>{
    console.log("...server started")
    console.log(PORT)
})