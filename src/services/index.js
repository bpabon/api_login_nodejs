// const AuthService = require('./auth/auth.services');
const userService = require('./auth/user.services');

module.exports={
    // ...AuthService,
    ...userService
}