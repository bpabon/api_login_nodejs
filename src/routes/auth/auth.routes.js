const express = require('express');
const router = express.Router();
const { loginAuth,emailRecoveryPassword } = require('../../schemas');
const { validateLoginAuthController,emailRecoveryPasswordController } = require('../../controller/auth/auth.controller');
const validationHandler = require('../../middlewares/validator.handler');
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
module.exports = router;
