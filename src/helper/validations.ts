import * as Joi from "joi";

export function userValidation(body) {
    const schema = {
        name: Joi.string().required(),
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        phone: Joi.string().min(13).max(13).required(),
        gender: Joi.string().min(4).max(6),
        subscriptionId: Joi.string().required(),
        email: Joi.string().required(),
        branchType: Joi.string().required(),
        branchName: Joi.string().requied()
    }
    return Joi.validate(body, schema);
}