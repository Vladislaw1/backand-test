const Joi = require("joi")

const bikesSchema = Joi.object({
    name: Joi.string().min(5).max(20).required().messages({
        'string.base': `"name" should be a type of 'text'`,
        'string.empty': `"name" cannot be an empty field`,
        'string.min': `"name" should have a minimum length of {#limit}`,
        'any.required': `"name" is a required field`
    }),
    type: Joi.string().min(5).max(20).required().messages({
        'string.base': `"type" should be a type of 'text'`,
        'string.empty': `"type" cannot be an empty field`,
        'string.min': `"type" should have a minimum length of {#limit}`,
        'any.required': `"type" is a required field`
    }),
    color: Joi.string().min(3).max(20).required().messages({
        'string.base': `"color" should be a type of 'text'`,
        'string.empty': `"color" cannot be an empty field`,
        'string.min': `"color" should have a minimum length of {#limit}`,
        'any.required': `"color" is a required field`
    }),
    wheelSize: Joi.number().required(),
    id: Joi.number().required(),
    price: Joi.number().required(),
    description: Joi.string().min(5).max(2000).required().messages({
        'string.base': `"color" should be a type of 'text'`,
        'string.empty': `"color" cannot be an empty field`,
        'string.min': `"color" should have a minimum length of {#limit}`,
        'any.required': `"color" is a required field`
    })
})

module.exports = bikesSchema;