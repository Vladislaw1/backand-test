const {bikes: service} = require("../../service")

const addNewBike = async (req, res, next) => {
    try {
        const newBike = req.body;

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