const Joi = require('joi');

const email = Joi.string().email().max(255);
const password = Joi.string().min(8).max(11);

const loginAuth = Joi.object({
    email: email.required(),
    password: password.required()
});


module.exports = {
    loginAuth,
}