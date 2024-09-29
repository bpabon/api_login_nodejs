const UserService = require('../../services/auth/user.services');
const { catchAsync } = require('.././../helpers');
const Boom = require('@hapi/boom');

//  Valid exists user in DB
const validUniqueUserMiddleware = catchAsync(async (req, res, next) => {
    const user = new UserService();
    const existsUser = await user.findByEmail(req.body?.email);
    if(existsUser){
        throw Boom.badRequest(`El usuario ${existsUser.dataValues?.email??'Sin Email'} ya se encuentra registrado`);
    }
    next();
    
});

module.exports = {
    validUniqueUserMiddleware,
}