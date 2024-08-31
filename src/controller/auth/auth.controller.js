const { catchAsync } = require('.././../helpers');
const Boom = require('@hapi/boom');

// Realiza la respectiva lógica para ingresar al sistema 
const validateLoginAuth = catchAsync(async (req, res, next) => {
    // return res.status(200).json({
    //     msg: 'vamos bien'
    // });
    return next(Boom.badRequest('Vamos bien.'));

});
module.exports = {
    validateLoginAuth
}