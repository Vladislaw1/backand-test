const {v4} = require("uuid")

// const {addBike} = require("../../utils")

const {bikes} = require("../../data")

const addNewBike = (req,res,next) => {
        const newBike = req.body;

        const idx = bikes.some(({id}) => id === newBike.id)
    if (idx){
        res.json({
            status:"error",
            code: 400,
            message: "This id already exists",
            data:{
                result:bikes
            }
        })
    }else {
        bikes.push(newBike)
        res.json({
            status:"success",
            code: 201,
            data:{
                result: newBike
            }
        })
    }
}

module.exports = addNewBike;