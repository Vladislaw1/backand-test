const {bikes} = require("../../data")

const patchBike = (req,res,next) =>{
    const {id} = req.params
    console.log(id)

    const updateBikes = req.body
    console.log(updateBikes)

    const idx = bikes.findIndex(({id: _id}) => _id == id)
    console.log(idx)

    bikes[idx] = updateBikes;
    if (idx === -1){
        res.json({
            status:"error",
            code: 404,
            message: "Bikes not found"
        })
    }

    res.json({
        statue:"success",
        code:200,
        data:{
            result: updateBikes
        }
    })

}

module.exports = patchBike