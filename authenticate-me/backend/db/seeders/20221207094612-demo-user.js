'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [
    {
      email: 'demo@user.io',
      username: 'demoUser',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'user1@user.io',
      username: 'demoUser1',
      hashedPassword: bcrypt.hashSync('password123')
    },
    {
      email: 'user2@user.io',
      username: 'demoUser2',
      hashedPassword: bcrypt.hashSync('password12345')
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['demoUser', 'demoUser1', 'demoUser2'] }
     }, {});
  }
};
