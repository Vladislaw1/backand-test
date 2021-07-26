const {v4} = require("uuid")

const {bikes} = require("../../data")

const addNewBike = (req,res,next) => {
        const newBike = req.body;
        bikes.push(newBike)
        res.json({
            status:"success",
            code: 201,
            data:{
                result: newBike
            }
        })
}

module.exports = addNewBike;