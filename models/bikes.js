const mongoose = require("mongoose")

const {model} = mongoose

const bikesSchema = require("./schema/bikes")

const Bikes = model("bikes",bikesSchema)

module.exports = Bikes;