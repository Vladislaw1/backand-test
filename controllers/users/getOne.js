const statOneUser = require("../../data/users_statistic.json")

const getOne = (req, res, next) => {

    console.log(req.query)

    const {id: _id} = req.params;
    const {dateStart , dateEnd} = req.query

    if (dateStart && dateEnd) {

        const start = new Date(dateStart).getDate()
        const end = new Date(dateEnd).getDate()

        const result = statOneUser.filter(el => {
            const dateUser = new Date(el.date).getDate()
            if (el.user_id == _id && start <= dateUser && end >= dateUser) {
                return el
            }
        })

        res.json({
            status: "success",
            code: 200,
            data:{
                result
            }
        })
    }

    const result = statOneUser.filter(({user_id}) => user_id == _id)

    if (!result) {
        res.status(404).json({
            status: "error",
            code: 404,
            message: "User not found"
        })
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
}

module.exports = getOne;