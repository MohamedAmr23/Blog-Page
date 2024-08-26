import Joi from "joi"

export const signUpSchema=Joi.object({
    name:Joi.string().min(3).max(80).required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
    rePassword:Joi.ref('password')
})
export const signInSchema=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/).required(),
})