const bikes = require("../../data/bikes.js")

const getAllBikes = (req,res,next)=>{
    res.json({
        status: "success",
        code:200,
        data:{
            result: bikes
        }
    })
}
module.exports = getAllBikes;