const { ValidationError } = require('sequelize');
const { config } = require('./../config/config');

function logErrors(err, req, res, next) {
    if (config.env === 'dev') {
        console.error(err);
    }
    next(err);
}

function errorHandler(err, req, res, next) {
    const status = err.status || 'fail';
    res.status(500).json({
        status,
        error: err,
        msg: err.message,
        stack: err.stack
    });
}
// Manejo de errores con la librería boom 
function boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
        const { output } = err;
        const payloadSpanish = err?.details?.map(detail => detail.message).join(', ');
        if (payloadSpanish) {
            output.payload.message = payloadSpanish || 'Desconocido';
        }
        res.status(output.statusCode).json(output.payload);
    } else {
        next(err);
    }
}

function ormErrorHandler(err, req, res, next) {
    if (err instanceof ValidationError) {
        res.status(409).json({
            statusCode: 409,
            message: err.name,
            errors: err.errors
        });
    }
    next(err);
}


module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler }
