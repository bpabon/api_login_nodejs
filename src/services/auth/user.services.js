const Boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../../db/sequelize');

class UserService {
  constructor() { }
  
  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({
      ...data,
      password: hash,
    });
    delete newUser.dataValues.password;
    return newUser;
  }
  // Buscar usuario por correo electrónico
  async findByEmail(email) {
      const rta = await models.User.findOne({
        where: { email }
      });
      return rta;
  }
  async findOne(id) {
      const user = await models.User.findByPk(id);
      if (!user) {
        throw Boom.notFound('usuario no encontrado');
      }
      return user;
  }
  async update(id, changes) {
      const user = await this.findOne(id);
      const rta = await user.update(changes);
      return rta;
  }
}
module.exports = UserService;
