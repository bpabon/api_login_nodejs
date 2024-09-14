const Boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('./../../config/config');
const UserService = require('./user.services');
const service = new UserService();

class AuthService {
  constructor() { }
  // Buscar usuario por correo  y validar si la contraseña es valida
  async getUser(email, password) {
      const user = await service.findByEmail(email);
      if (!user) {
        throw Boom.unauthorized('El correo electrónico suministrado no existe.');
      }
      const passwordCorrecta = await bcrypt.compare(password, user.password);
      if (!passwordCorrecta) {
        throw Boom.unauthorized('Contraseña incorrecta.');;
      }
      delete user.dataValues.password;
      delete user.dataValues.createdAt;
      return user;
  }
  // Crear un JWT y retornar los datos del usuario y el token
  signToken(user) {
      const payload = {
        sub: user.id,
        email: user.email
      }
      const access_token = jwt.sign(payload, config.jwtSecret, { expiresIn: '12h' });
      return {
        user,
        access_token
      };
  }
  // validar si tiene una solicitud de cambio de contraseña
  async sendRecovery(email) {
      const user = await service.findByEmail(email);
      if (!user) {
        throw Boom.notFound('No fue posible encontrar el correo electrónico');
      }
      const payload = { sub: user.id, email: user.email };
      const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '60min' });
      const link = `http://myfrontend.com/recovery?token=${token}`;
      await service.update(user.id, { recoveryToken: token });
      return link
  }
}
module.exports = AuthService;
