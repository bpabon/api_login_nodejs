const express = require('express');
const authRouter = require('./auth/auth.routes');
const publicRouter = require('./public/changePassword.routes');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/auth', authRouter);
    router.use('/public', publicRouter);
}

module.exports = routerApi;