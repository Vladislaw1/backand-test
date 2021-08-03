const {bikes: service} = require("../../service")

const patchBike = async (req, res, next) => {
    try {
        const {id} = req.params
        const status = req.body

        const result = await service.update(id, status)
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        })
    } catch (e) {
        next(e)
    }
}

module.exports = patchBike