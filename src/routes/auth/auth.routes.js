const express = require('express');
const router = express.Router();
const { loginAuth,emailRecoveryPassword,changePassword,getToken,registryUser } = require('../../schemas');
const { validateLoginAuthController,emailRecoveryPasswordController,changePasswordController,newUserController } = require('../../controller/auth/auth.controller');
const validationHandler = require('../../middlewares/validator.handler');
const {validUniqueUserMiddleware} = require('../../middlewares/index');
/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [auth]
 *     summary: "Realizar el login en el API y retornar el token"
 *     requestBody:
 *      required: true
 *      description: Pasar los diferentes parámetros en la ruta para poder realizar las verificaciones de usuario y contraseña y si son validos retornar los respectivos datos y token
 *      content:
 *         application/json:
 *           description: Realiza la autenticación de usuario y contraseña para poder obtener datos del token para las rutas privadas
 *           schema:
 *             $ref: '#/definitions/LoginAuth'
 *     responses:
 *       200:
 *         description: Un objeto con las propiedades del dato del usuario y el token para poder interactuar con las rutas privadas
 *         content:
 *          application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/definitions/ResponseExitoLogin'
 *       400:
 *         description: Retorna un objeto con las propiedades respectivas del error como es el statusCode y el mensaje del error mas detallado
 *         content:
 *          application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/definitions/ResponseGeneralError400' 
 *       500:
 *         description: Objeto con las propiedades error, msg,stack, status donde el mensaje que tendrá el detalle estará en la propiedad msg
 *         content:
 *          application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/definitions/ResponseGeneralError500'  
 */
// Ruta para validar que las credenciales sean las correctas y retornar un token en caso de éxito
router.post('/login',
    [
        validationHandler(loginAuth, 'body')
    ],
    validateLoginAuthController
);
/**
 * @swagger
 * /auth/recoveryPassword:
 *   post:
 *     tags: [auth]
 *     summary: "Solicitar cambio de contraseña por medio de correo electrónico"
 *     requestBody:
 *      required: true
 *      description: Realizar el la solicitud del restablecimiento de contraseña por medio de un enlace enviado al correo electrónico
 *      content:
 *         application/json:
 *           description: Envío de correo electrónico con un enlace para realizar el respectivo cambio de contraseña
 *           schema:
 *             $ref: '#/definitions/RecoveryPassword'
 *     responses:
 *       200:
 *         description: Un objeto con las propiedades del dato del usuario y el token para poder interactuar con las rutas privadas
 *         content:
 *          application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/definitions/ResponseRecoveryPassword'
 *       400:
 *         description: Retorna un objeto con las propiedades respectivas del error como es el statusCode y el mensaje del error mas detallado
 *         content:
 *          application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/definitions/ResponseGeneralError400' 
 *       500:
 *         description: Objeto con las propiedades error, msg,stack, status donde el mensaje que tendrá el detalle estará en la propiedad msg
 *         content:
 *          application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/definitions/ResponseGeneralError500'  
 */
// Ruta para enviar un link con una URL con el token para que realice cambio de contraseña
router.post('/recoveryPassword',
    [
        validationHandler(emailRecoveryPassword, 'body')
    ],
    emailRecoveryPasswordController
);
/**
 * @swagger
 * /auth/changePassword/{token}:
 *   post:
 *     tags: [auth]
 *     summary: "Actualizar contraseña"
 *     parameters:
 *       - name: token
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: 'Token para actualizar la contraseña'
 *     requestBody:
 *      required: true
 *      description: Validación de token de sesión y de contraseñas enviadas para realizar el respectivo cambio de contraseña
 *      content:
 *         application/json:
 *           description: Envío de correo electrónico con un enlace para realizar el respectivo cambio de contraseña
 *           schema:
 *             $ref: '#/definitions/ChangePassword'
 *     responses:
 *       200:
 *         description: Un objeto con la propiedad msg indicando que se cambio de contraseña
 *         content:
 *          application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/definitions/ResponseChangePassword'
 *       400:
 *         description: Retorna un objeto con las propiedades respectivas del error como es el statusCode y el mensaje del error mas detallado
 *         content:
 *          application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/definitions/ResponseGeneralError400' 
 *       500:
 *         description: Objeto con las propiedades error, msg,stack, status donde el mensaje que tendrá el detalle estará en la propiedad msg
 *         content:
 *          application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/definitions/ResponseGeneralError500'  
 */
// Cambiar contraseñas -- Change password
router.post('/changePassword/:token',
    [
        validationHandler(getToken, 'params'),
        validationHandler(changePassword, 'body')
    ],
    changePasswordController
);
/**
 * @swagger
 * /auth/registerUser:
 *   post:
 *     tags: [user]
 *     summary: "Crear un nuevo usuario"
 *     requestBody:
 *      required: true
 *      description: Realizar la creación de un nuevo usuario encriptando la contraseña y asignando un rol respectivo
 *      content:
 *         application/json:
 *           description: Realizar la creación de un nuevo usuario encriptando la contraseña y asignando un rol respectivo
 *           schema:
 *             $ref: '#/definitions/NewUserApi'
 *     responses:
 *       200:
 *         description: Un objeto con la propiedad msg indicando que se creo el usuario de forma correcta
 *         content:
 *          application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/definitions/ResponseNewUser'
 *       400:
 *         description: Retorna un objeto con las propiedades respectivas del error como es el statusCode y el mensaje del error mas detallado
 *         content:
 *          application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/definitions/ResponseGeneralError400' 
 *       500:
 *         description: Objeto con las propiedades error, msg,stack, status donde el mensaje que tendrá el detalle estará en la propiedad msg
 *         content:
 *          application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/definitions/ResponseGeneralError500'  
 */
// Ruta para registrar un nuevo usuario -- register a new user
router.post('/registerUser',
    [
        validationHandler(registryUser, 'body'),
        validUniqueUserMiddleware
    ],
    newUserController
);
module.exports = router;
