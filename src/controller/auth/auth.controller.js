const { catchAsync } = require('.././../helpers');
const Boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const AuthService = require('../../services/auth/auth.services');
const EmailService = require('../../services/mail/mail.services');
const UserService = require('../../services/auth/user.services');
const serviceAuth = new AuthService();

// Realiza la respectiva lógica para ingresar al sistema 
const validateLoginAuthController = catchAsync(async (req, res, next) => {
    const user = await serviceAuth.getUser(req.body.email, req.body.password);
    const dataJwt = serviceAuth.signToken(user);
    return res.status(200).json(dataJwt);
});
// Enviar un correo electrónico con el parámetro de token para que se realice cambio de contraseña
const emailRecoveryPasswordController = catchAsync(async (req, res, next) => {
    const linkToken = await serviceAuth.sendRecovery(req.body.email);
    if (!linkToken) {
        throw Boom.notFound('No fue posible encontrar un token');
    }
    const emailService = new EmailService();
    await emailService.sendMail(linkToken.user.email, 'Restablecimiento de Contraseña', { name: linkToken.user.email, link: linkToken.link });
    return res.status(200).json({ mg: 'Se ha enviado un correo electrónico con un enlace para su cambio de contraseña.' });
});
//  Cambio de contraseñas -- Change password user
const changePasswordController = catchAsync(async (req, res, next) => {
    const user = new UserService()
    const { token } = req.params;
    const decoded = serviceAuth.verifyJwt(token);
    const userData = await user.findOne(decoded.sub);
    if (userData.recoveryToken !== token) {
        throw Boom.unauthorized('La URL ya no se encuentra disponible, por favor verifique la información.');
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    await user.update(userData.id, {recoveryToken: null, password: hash});
    return res.status(200).json({ mg: 'La contraseña se ha cambiado de forma correcta.'});
})
module.exports = {
    validateLoginAuthController,
    emailRecoveryPasswordController,
    changePasswordController
}
