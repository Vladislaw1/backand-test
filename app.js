const express = require("express")
const cors = require("cors")

const api = require("./api")

const app = express()

app.use(cors())

app.use("/bikes", api.bikes)
app.use("/users", api.users)
app.use("/statistic", api.statistic)

app.use((_,res)=>{
    res.status(404).json({
        status:"error",
        code: 404,
        message:"Not found"
    })
})
