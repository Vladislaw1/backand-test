const {bikes:service} = require("../../service")

const getAllBikes = async (req, res, next) => {
    try {
        const result = await service.getAll({})
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
module.exports = getAllBikes;