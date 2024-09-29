'use strict';

/** @type {import('sequelize-cli').Migration} */
const { USER_TABLE } = require('./../models/user.model');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addIndex(USER_TABLE, ['email'], {
      unique: true,
      name: 'unique_email_index'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex(USER_TABLE, 'unique_email_index');
  }
};
