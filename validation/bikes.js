const Joi = require("joi")

const bikesSchema = Joi.object({
    name: Joi.string().min(5).max(20).required(),
    type: Joi.string().min(5).max(20).required(),
    color: Joi.string().min(5).max(20).required(),
    wheelSize: Joi.number().max(20).required(),
    id: Joi.number().max(20).required(),
    price: Joi.number().max(20).required(),
    description: Joi.string().min(5).max(200).required()
})

module.exports = bikesSchema;