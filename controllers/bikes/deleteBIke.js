const {bikes} = require("../../data")

const deleteBIke = (req,res,next) => {
    const {id} = req.params

    const idx = bikes.findIndex(({id: _id}) => _id == id)

    if (idx === -1){
        res.json({
            status: "error",
            code: 404,
            message: "Bikes not found"
        })
    }
    bikes.splice(idx,1)

    res.json({
        status: "success",
        code: 200,
        data: {
            result:bikes
        }
    })
}
module.exports = deleteBIke;