'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Attractions', [
      {
        name: 'Quitapulgas de Scratchy',
        min_height: 120,
        max_height: 190,
        length: 1200,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        name: 'Monte Krustmore',
        min_height: 110,
        max_height: 190,
        length: 850,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        name: 'Galeon vikingo',
        min_height: 150,
        max_height: 200,
        length: 1000,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        name: 'Bloque encantado',
        min_height: 160,
        max_height: 210,
        length: 1500,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        name: 'Ojos letales',
        min_height: 140,
        max_height: 195,
        length: 1450,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Attractions', null, {});
  }
};
