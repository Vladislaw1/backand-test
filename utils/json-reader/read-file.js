const fs = require("fs");

// const express = require("express")

// const app = express();
//
//
//
// app.listen(3000)

const jsonRead = (PathStatistic) => fs.readFile(PathStatistic,"utf-8",(err,data)=>{
    console.log(data)
})

 module.exports= jsonRead;
