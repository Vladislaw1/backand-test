const {bikes: service} = require("../../service")

const deleteBIke = async (req, res, next) => {
    try {
        const {id} = req.params
        await service.deleteBike(id)

        res.status(204).json({
            status: "success",
            code: 204,
        })
    } catch (e) {
        next(e)
    }
}
module.exports = deleteBIke;