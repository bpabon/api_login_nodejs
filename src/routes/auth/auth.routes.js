const express = require('express');
const router = express.Router();
const { loginAuth } = require('../../schemas');
const { validateLoginAuth } = require('../../controller/auth/auth.controller');
const validationHandler = require('../../middlewares/validator.handler');
// Ruta para validar que las credenciales sean las correctas y retornar un token en caso de éxito
router.post('/login',
    // Validar el esquema sea el correcto
    [
        validationHandler(loginAuth, 'body')
    ],
    validateLoginAuth
);
module.exports = router;