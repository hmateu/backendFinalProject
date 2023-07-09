'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        id: 1,
        name: 'admin',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 2,
        name: 'worker',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 3,
        name: 'customer',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      }
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};