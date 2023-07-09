'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tickets', [
      {
        date: '2023-07-09 00:00:00',
        customer:11,
        price_change:1,
        price:35,
        validated: false,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        date: '2023-07-09 00:00:00',
        customer:12,
        price_change:1,
        price:35,
        validated: false,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        date: '2023-07-09 00:00:00',
        customer:13,
        price_change:1,
        price:35,
        validated: false,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        date: '2023-07-09 00:00:00',
        customer:14,
        price_change:3,
        price:20,
        validated: false,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        date: '2023-07-09 00:00:00',
        customer:15,
        price_change:2,
        price:25,
        validated: false,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        date: '2023-07-09 00:00:00',
        customer:16,
        price_change:3,
        price:20,
        validated: false,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tickets', null, {});
  }
};
