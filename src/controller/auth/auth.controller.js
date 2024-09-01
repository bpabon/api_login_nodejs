const { catchAsync } = require('.././../helpers');
const Boom = require('@hapi/boom');
const AuthService = require('../../services/auth/auth.services');

// Realiza la respectiva lógica para ingresar al sistema 
const validateLoginAuth = catchAsync(async (req, res, next) => {
    const serviceAuth = new AuthService();
    const user = await serviceAuth.getUser(req.body.email, req.body.password);
    const dataJwt = serviceAuth.signToken(user);
    return res.status(200).json(dataJwt);
});
module.exports = {
    validateLoginAuth
}