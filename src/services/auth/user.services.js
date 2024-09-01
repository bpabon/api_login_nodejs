const Boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const { models } = require('../../db/sequelize');

class UserService {
    constructor() {}
    // Buscar usuario por correo electrónico
    async findByEmail(email) {
        const rta = await models.User.findOne({
          where: { email }
        });
        return rta;
      }
}
module.exports = UserService;