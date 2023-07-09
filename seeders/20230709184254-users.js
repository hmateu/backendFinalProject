'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        dni: '21445639J',
        name: 'Héctor',
        surname: 'Mateu Ortolá',
        age: 28,
        cp: 46894,
        mobile: 638524711,
        email: 'hmateu.ortola@gmail.com',
        password: 'Hector1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 2,
        dni: '32547782N',
        name: 'Marta',
        surname: 'Marí Soro',
        age: 30,
        cp: 25437,
        mobile: 736554817,
        email: 'marta@gmail.com',
        password: 'Marta1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 3,
        dni: '20123665C',
        name: 'Maria Angeles',
        surname: 'Sanchis Oltra',
        age: 45,
        cp: 31476,
        mobile: 631147890,
        email: 'mangeles@gmail.com',
        password: 'MAngeles1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 4,
        dni: '03654471A',
        name: 'Jose Enrique',
        surname: 'Castells Montell',
        age: 38,
        cp: 41258,
        mobile: 638921473,
        email: 'jenrique@gmail.com',
        password: 'JEnrique1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 5,
        dni: '30187314N',
        name: 'Angela',
        surname: 'Maza Gilabert',
        age: 37,
        cp: 36514,
        mobile: 714300654,
        email: 'angela@gmail.com',
        password: 'Angela1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 6,
        dni: '20653328K',
        name: 'David',
        surname: 'Mateu Mahiques',
        age: 35,
        cp: 74520,
        mobile: 631478872,
        email: 'david@gmail.com',
        password: 'David1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 7,
        dni: '88307452P',
        name: 'Andrea',
        surname: 'Pérez Carrillo',
        age: 30,
        cp: 65998,
        mobile: 632214782,
        email: 'andrea@gmail.com',
        password: 'Andrea1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 8,
        dni: '02788541P',
        name: 'Nastia',
        surname: 'López Pérez',
        age: 5,
        cp: 39023,
        mobile: 632214782,
        email: 'nastia@gmail.com',
        password: 'Nastia1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 9,
        dni: '36541208P',
        name: 'Judit',
        surname: 'Alberola Camús',
        age: 28,
        cp: 74581,
        mobile: 716593002,
        email: 'judit@gmail.com',
        password: 'Judit1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        id: 10,
        dni: '51479360H',
        name: 'Coral',
        surname: 'Méndez Ripoll',
        age: 30,
        cp: 64120,
        mobile: 639874102,
        email: 'coral@gmail.com',
        password: 'Coral1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        dni: '14523900D',
        name: 'Edu',
        surname: 'Jorpe Aslot',
        age: 32,
        cp: 39745,
        mobile: 723654880,
        email: 'edu@gmail.com',
        password: 'Edu1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        dni: '70639541A',
        name: 'Oriana',
        surname: 'Alpe Corre',
        age: 29,
        cp: 14025,
        mobile: 638741002,
        email: 'oriana@gmail.com',
        password: 'Oriana1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        dni: '20395134X',
        name: 'Jorge',
        surname: 'Arriba Alpe',
        age: 10,
        cp: 29763,
        mobile: 638741002,
        email: 'jorge@gmail.com',
        password: 'Jorge1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        dni: '36554781O',
        name: 'Pablo',
        surname: 'López González',
        age: 70,
        cp: 28001,
        mobile: 641125478,
        email: 'pablo@gmail.com',
        password: 'Pablo1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        dni: '14522369E',
        name: 'Laura',
        surname: 'Hernández López',
        age: 5,
        cp: 65472,
        mobile: 722145870,
        email: 'laura@gmail.com',
        password: 'Laura1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        dni: '23965410P',
        name: 'Carlos',
        surname: 'García Martínez',
        age: 67,
        cp: 14753,
        mobile: 745633910,
        email: 'carlos@gmail.com',
        password: 'Carlos1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        dni: '24115725P',
        name: 'Mireia',
        surname: 'Bañón Sala',
        age: 24,
        cp: 36547,
        mobile: 641350879,
        email: 'mireia@gmail.com',
        password: 'Mireia1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        dni: '62314458H',
        name: 'Daniel',
        surname: 'Sánchez López',
        age: 39,
        cp: 74103,
        mobile: 728310472,
        email: 'daniel@gmail.com',
        password: 'Daniel1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        dni: '34109765R',
        name: 'Sarah',
        surname: 'Martínez Fernández',
        age: 27,
        cp: 29430,
        mobile: 641035728,
        email: 'sara@gmail.com',
        password: 'Sara1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      },
      {
        dni: '62014752X',
        name: 'Borja',
        surname: 'Romero Sánchez',
        age: 28,
        cp: 36921,
        mobile: 630217458,
        email: 'borja@gmail.com',
        password: 'Borja1234!',
        createdAt: '2023-07-09 00:00:00',
        updatedAt: '2023-07-09 00:00:00'
      }
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
