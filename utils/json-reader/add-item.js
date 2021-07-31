const fs = require("fs")

const path = require("path")

const pathBikeData = path.join(__dirname,"data","bikes.js")

const addBike =async (filePath,body) => {
    try{
        const file = fs.readFile(filePath)
        const data = JSON.parse(file)
        console.log(data)
        data.push(body)
        const dataString = JSON.stringify(data)
        console.log(dataString)
        fs.writeFile(pathBikeData,dataString)
    }catch (e) {
        console.log(e)
    }
}
module.exports = addBike;