const express = require('express');
const authRouter = require('./auth/auth.routes');
const publicRouter = require('./public/changePassword.routes');
/**
* @swagger
* /user:
*   get:
*     tags:
*       - user
*     summary: Lista los usuarios aldair
*     responses:
*       200:
*         description: Lista de usuarios
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/definitions/User'
*/
function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/auth', authRouter);
    router.use('/public', publicRouter);
}

module.exports = routerApi;