const Joi = require("joi");

//Register validation
const registerValidation = async (data, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });
    try {
        await schema.validateAsync(data);
    } catch (err) {
        const { details } = err;
        res.status(400).send(details[0].message);
    }
};
//Login validation
const loginValidation = async (data, res) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });

    try {
        await schema.validateAsync(data);
    } catch (err) {
        const { details } = err;
        res.status(400).send(details[0].message);
    }
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
