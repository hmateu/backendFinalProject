'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Workers', [
      {
        id: 1,
        email: 'martaw@gmail.com',
        password: 'Marta1234!',
        user: 2,
        attraction: 2,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 2,
        email: 'mangelesw@gmail.com',
        password: 'MAngeles1234!',
        user: 3,
        attraction: 3,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 3,
        email: 'jenriquew@gmail.com',
        password: 'JEnrique1234!',
        user: 4,
        attraction: 4,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 4,
        email: 'angelaw@gmail.com',
        password: 'Angela1234!',
        user: 5,
        attraction: 5,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 5,
        email: 'davidw@gmail.com',
        password: 'David1234!',
        user: 6,
        attraction: 5,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 6,
        email: 'andreaw@gmail.com',
        password: 'Andrea1234!',
        user: 7,
        attraction: 4,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 7,
        email: 'nastiaw@gmail.com',
        password: 'Nastia1234!',
        user: 8,
        attraction: 1,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 8,
        email: 'judit@gmail.com',
        password: 'Judit1234!',
        user: 9,
        attraction: 2,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 9,
        email: 'coral@gmail.com',
        password: 'Coral1234!',
        user: 10,
        attraction: 3,
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Workers', null, {});
  }
};
