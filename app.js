const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const dotenv = require("dotenv")

dotenv.config()

const api = require("./api")

const {DB_HOST,PORT} = process.env

const app = express()

app.use(cors())

app.use("/api/v1/bikes",api.bikes)

app.use((_, res)=>{
    res.status(404).json({
        status:"error",
        code: 404,
        message:"Not found"
    })
})

mongoose.connect(DB_HOST,{
    useFindAndModify: false,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    app.listen(4002,()=>{
        console.log("...server started")
        console.log(PORT)
    })
})
