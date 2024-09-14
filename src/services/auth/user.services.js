const Boom = require('@hapi/boom');

const { models } = require('../../db/sequelize');

class UserService {
  constructor() { }
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
        throw boom.notFound('usuario no encontrado');
      }
      return user;
  }
  async update(id, changes) {
      const user = await this.findOne(id);
      const rta = await user.update(changes);
      return rta;
  }
  // Actualizar el usuario por medio de la búsqueda del ID
  async update(id, changes) {
      const user = await this.findOne(id);
      const rta = await user.update(changes);
      return rta;
  }
}
module.exports = UserService;