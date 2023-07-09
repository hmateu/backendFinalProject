'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Price_Changes', [
      {
        name: 'general',
        price: 35,
        description: 'Personas entre 12 y 65 años, ambos inclusive',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        name: 'junior',
        price: 25,
        description: 'Personas menores de 12 años',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        name: 'reducer',
        price: 20,
        description: 'Personas mayores 65 años',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Price_Changes', null, {});
  }
};
