const {bikes: service} = require("../../service")

const deleteBIke = async (req, res, next) => {
    try {
        const {id} = req.params
        await service.deleteBike(id)

        const result = await service.getAll({})
        console.log(result)
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
module.exports = deleteBIke;