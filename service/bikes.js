const {Bikes} = require("../models")

const getAll = (query) => {
    return Bikes.find(query)
}

const add = (body) => {
    return Bikes.create(body)
}

const update = (_id,status) => {
    return Bikes.findByIdAndUpdate({_id}, status,{new:true})
}

const deleteBike = (id) => {
    return Bikes.findByIdAndDelete(id)
}

const service = {
    getAll,add,update,deleteBike
}

module.exports = service