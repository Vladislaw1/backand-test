const {v4} = require("uuid")

// const {addBike} = require("../../utils")

const {bikes} = require("../../data")

const addNewBike = (req,res,next) => {
        const newBike = req.body;
        // addBike().then(res = res(newBike))
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