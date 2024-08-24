const express = require('express');
const cors = require('cors');
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');
const fileUpload = require('express-fileupload');


// Función centralizada para la creación del servicio y reutilización
const createApp = () => {
    const app = express();

    app.use(express.json());
    const whitelist = ['http://localhost:4200'];
    const options = {
        origin: (origin, callback) => {
            if (whitelist.includes(origin) || !origin) {
                callback(null, true);
            } else {
                callback(new Error('No permitido'));
            }
        }
    }
    app.use(cors(options));
    app.use(express.json({ limit: '20mb' }));
    // require('../src/db/sequelize')
    //directorio publico
    app.use(express.static('public'));
    app.use(fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
        createParentPath: true
    }));
    // require('./utils/auth');
    app.get("/", (req, res) => res.status(200).send("api is v1"));
    // routerApi(app);
    app.use(logErrors);
    app.use(ormErrorHandler);
    app.use(boomErrorHandler);
    app.use(errorHandler);

    return app;
}
module.exports = createApp;