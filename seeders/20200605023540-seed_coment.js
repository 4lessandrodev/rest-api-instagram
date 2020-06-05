'use strict';
const faker = require('faker');
const moment = require('moment');
let date = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('coments', [
      {
        id: 1,
        text: faker.lorem.text(),
        usersId: 3,
        postsId: 1,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 2,
        text: faker.lorem.text(),
        usersId: 2,
        postsId: 1,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 3,
        text: faker.lorem.text(),
        usersId: 4,
        postsId: 1,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 4,
        text: faker.lorem.text(),
        usersId: 5,
        postsId: 2,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 5,
        text: faker.lorem.text(),
        usersId: 6,
        postsId: 2,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 6,
        text: faker.lorem.text(),
        usersId: 7,
        postsId: 2,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 7,
        text: faker.lorem.text(),
        usersId: 3,
        postsId: 2,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 8,
        text: faker.lorem.text(),
        usersId: 8,
        postsId: 4,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 9,
        text: faker.lorem.text(),
        usersId: 9,
        postsId: 4,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 10,
        text: faker.lorem.text(),
        usersId: 10,
        postsId: 5,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 11,
        text: faker.lorem.text(),
        usersId: 11,
        postsId: 6,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 12,
        text: faker.lorem.text(),
        usersId: 1,
        postsId: 6,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
       {
        id: 13,
        text: faker.lorem.text(),
        usersId: 8,
        postsId: 7,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
       {
        id: 14,
        text: faker.lorem.text(),
        usersId: 10,
        postsId: 8,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 15,
        text: faker.lorem.text(),
        usersId: 8,
        postsId: 8,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 16,
        text: faker.lorem.text(),
        usersId: 11,
        postsId: 9,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 17,
        text: faker.lorem.text(),
        usersId: 1,
        postsId: 10,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 18,
        text: faker.lorem.text(),
        usersId: 5,
        postsId: 10,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 19,
        text: faker.lorem.text(),
        usersId: 2,
        postsId: 11,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
       {
        id: 20,
        text: faker.lorem.text(),
        usersId: 9,
        postsId: 11,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 21,
        text: faker.lorem.text(),
        usersId: 10,
        postsId: 12,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 22,
        text: faker.lorem.text(),
        usersId: 1,
        postsId: 12,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
       {
        id: 23,
        text: faker.lorem.text(),
        usersId: 7,
        postsId: 13,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 24,
        text: faker.lorem.text(),
        usersId: 2,
        postsId: 14,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 25,
        text: faker.lorem.text(),
        usersId: 1,
        postsId: 16,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 26,
        text: faker.lorem.text(),
        usersId: 1,
        postsId: 15,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 26,
        text: faker.lorem.text(),
        usersId: 3,
        postsId: 17,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 27,
        text: faker.lorem.text(),
        usersId: 6,
        postsId: 18,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
       {
        id: 28,
        text: faker.lorem.text(),
        usersId: 4,
        postsId: 19,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 29,
        text: faker.lorem.text(),
        usersId: 3,
        postsId: 20,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 30,
        text: faker.lorem.text(),
        usersId: 8,
        postsId: 21,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 31,
        text: faker.lorem.text(),
        usersId: 11,
        postsId: 1,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 32,
        text: faker.lorem.text(),
        usersId: 10,
        postsId: 1,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 33,
        text: faker.lorem.text(),
        usersId: 9,
        postsId: 2,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
       {
        id: 34,
        text: faker.lorem.text(),
        usersId: 8,
        postsId: 3,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
       {
        id: 35,
        text: faker.lorem.text(),
        usersId: 7,
        postsId: 4,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
       {
        id: 36,
        text: faker.lorem.text(),
        usersId: 7,
        postsId: 4,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
       {
        id: 37,
        text: faker.lorem.text(),
        usersId: 6,
        postsId: 5,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
       {
        id: 38,
        text: faker.lorem.text(),
        usersId: 6,
        postsId: 5,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 39,
        text: faker.lorem.text(),
        usersId: 7,
        postsId: 21,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
       {
        id: 40,
        text: faker.lorem.text(),
        usersId: 11,
        postsId: 18,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
       {
        id: 41,
        text: faker.lorem.text(),
        usersId: 8,
        postsId: 20,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 42,
        text: faker.lorem.text(),
        usersId: 9,
        postsId: 17,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('coments', null, {});
  }
};
