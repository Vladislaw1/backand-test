const users = require("../../data/users.json")

const getAll = (req,res,next) => {
    res.json({
        status:"success",
        code: 200,
        data:{
            result: users
        }
    })
}

module.exports = getAll