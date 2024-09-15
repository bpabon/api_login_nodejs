const Joi = require('joi');

const email = Joi.string().email().max(255);
const password = Joi.string().min(8).max(11);
const token = Joi.string().min(20).max(255);

const loginAuth = Joi.object({
    email: email.required(),
    password: password.required()
});

const emailRecoveryPassword = Joi.object({
    email: email.required()
});

const changePassword = Joi.object({
    password: password.required(),
    verify_password: Joi.string().valid(Joi.ref('password')).required()
    .messages({
      'any.only': 'Las contraseñas suministradas no coinciden por favor verifique los datos.'
    })
});
const getToken = Joi.object({
    token: token.required(),
  });

module.exports = {
    loginAuth,
    emailRecoveryPassword,
    changePassword,
    getToken
}
