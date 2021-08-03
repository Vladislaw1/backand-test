const {Schema} = require("mongoose")

const bikesSchema = Schema({
    id: {
       type: Number,
        unique: true
    },
    name: {
        type:String,
        required: true,
        match: /^[A-zА-я]{5,20}$/
    },
    type: {
        type:String,
        required: true,
        match: /^[A-zА-я]{5,20}$/
    },
    color: {
        type:String,
        required: true,
        match: /^[A-zА-я]{2,20}$/
    },
    wheelSize:Number,
    price: Number,
    description: {
        type:String,
        required: true,
        match: /^[A-z]{5,40}$/
    },
    status: {
        type: String,
        enum:["Available","Busy","Unavailable"],
        default: "Available",
    }
})

module.exports = bikesSchema