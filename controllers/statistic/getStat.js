const statistic = require("../../data/users_statistic.json")

const getStat = (req,res,next) => {

    res.json({
        status:"success",
        code:200,
        data:{
            result: statistic
        }
    })
}

module.exports = getStat;