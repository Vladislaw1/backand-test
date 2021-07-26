const {bikes} = require("../../data")

const deleteBIke = (req,res,next) => {
    const {id} = req.params
    console.log(id)

    const idx = bikes.findIndex(({id: _id}) => _id == id)
    console.log(idx)

    if (idx === -1){
        res.json({
            status: "error",
            code: 404,
            message: "Bikes not found"
        })
    }
    bikes.slice(idx,1)
    res.status(204).json({
        status: "success",
        code: 204,
        message: "Delete bike"
    })
}
module.exports = deleteBIke;