import Joi from "joi"

export const addBlogSchema=Joi.object({
    title:Joi.string().min(3).max(80).required(),
    desc:Joi.string().min(3).max(80).required(),
    createdBy:Joi.string().hex().length(24)
})