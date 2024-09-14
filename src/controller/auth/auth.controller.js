const { catchAsync } = require('.././../helpers');
const Boom = require('@hapi/boom');
const AuthService = require('../../services/auth/auth.services');
const EmailService = require('../../services/mail/mail.services');
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
        throw Boom.notFound('No fue posible encontrar un token');;
      }
    const emailService = new EmailService();
    console.log(linkToken.link);
    const sendEmail = await emailService.sendMail('bpabon1@udi.edu.co', 'Restablecimiento de Contraseña', {name: linkToken.user.email, link: linkToken.link});
    return res.status(200).json({mg:'Correo enviado'});
});
module.exports = {
    validateLoginAuthController,
    emailRecoveryPasswordController
}
