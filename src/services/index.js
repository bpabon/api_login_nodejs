// const AuthService = require('./auth/auth.services');
const UserService = require('./auth/user.services');

module.exports={
    // ...AuthService,
    ...UserService
}