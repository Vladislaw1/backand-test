const {bikes: service} = require("../../service")

const {bikesValidate} = require("../../validation")

const addNewBike = async (req, res, next) => {
    try {
        const newBike = req.body;
        const {error} = bikesValidate.validate(newBike)
        const {details} = error
        if (error){
            res.json({
                status: "error",
                code: 400,
                message: details
            })
        }

        const result = await service.add(newBike)
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result
            }
        })
    } catch (e) {
        next(e)
    }
}

module.exports = addNewBike;