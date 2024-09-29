const express = require('express');
const router = express.Router();
const { loginAuth,emailRecoveryPassword,changePassword,getToken,registryUser } = require('../../schemas');
const { validateLoginAuthController,emailRecoveryPasswordController,changePasswordController,newUserController } = require('../../controller/auth/auth.controller');
const validationHandler = require('../../middlewares/validator.handler');
const {validUniqueUserMiddleware} = require('../../middlewares/index');
// Ruta para validar que las credenciales sean las correctas y retornar un token en caso de éxito
router.post('/login',
    [
        validationHandler(loginAuth, 'body')
    ],
    validateLoginAuthController
);
// Ruta para enviar un link con una URL con el token para que realice cambio de contraseña
router.post('/recoveryPassword',
    [
        validationHandler(emailRecoveryPassword, 'body')
    ],
    emailRecoveryPasswordController
);
// Cambiar contraseñas -- Change password
router.post('/changePassword/:token',
    [
        validationHandler(getToken, 'params'),
        validationHandler(changePassword, 'body')
    ],
    changePasswordController
);
// Ruta para registrar un nuevo usuario -- register a new user
router.post('/registerUser',
    [
        validationHandler(registryUser, 'body'),
        validUniqueUserMiddleware
    ],
    newUserController
);
module.exports = router;
