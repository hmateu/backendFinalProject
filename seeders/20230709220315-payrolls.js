'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Payrolls', [
      {
        date: '2023-07-01 00:00:00',
        salary: 2000,
        worker: 1,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        date: '2023-07-01 00:00:00',
        salary: 1800,
        worker: 2,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        date: '2023-07-01 00:00:00',
        salary: 1800,
        worker: 3,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        date: '2023-07-01 00:00:00',
        salary: 1650,
        worker: 4,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        date: '2023-07-01 00:00:00',
        salary: 1650,
        worker: 5,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        date: '2023-07-01 00:00:00',
        salary: 1300,
        worker: 6,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        date: '2023-07-01 00:00:00',
        salary: 1300,
        worker: 7,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        date: '2023-07-01 00:00:00',
        salary: 1300,
        worker: 8,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        date: '2023-07-01 00:00:00',
        salary: 1300,
        worker: 9,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Payrolls', null, {});
  }
};
