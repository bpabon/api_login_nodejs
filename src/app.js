const express = require('express');
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler,routeErrors } = require('./middlewares/error.handler');
const fileUpload = require('express-fileupload');
const routerApi = require('./routes');
const swaggerSetup = require('./swagger/swagger');

// Función centralizada para la creación del servicio y reutilización
const createApp = () => {
    const app = express();

    app.use(express.json());
    const whitelist = ['http://localhost:4200','http://localhost:5000'];
    const options = {
        origin: (origin, callback) => {
            if (whitelist.includes(origin) || !origin) {
                callback(null, true);
            } else {
                callback(new Error('URL No permitida'));
            }
        }
    }
    app.use(cors(options));
    app.use(express.json({ limit: '20mb' }));
    // require('../src/db/sequelize')
    app.use(fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
        createParentPath: true
    }));
    routerApi(app);
    // Ruta para la documentación con swagger
    swaggerSetup(app);
    // Middleware para manejar rutas no existentes
    app.use(routeErrors);
    app.use(logErrors);
    app.use(ormErrorHandler);
    app.use(boomErrorHandler);
    app.use(errorHandler);

    return app;
}
module.exports = createApp;
