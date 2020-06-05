'use strict';
const faker = require('faker');
const moment = require('moment');
let date = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
      {
        id:1,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 1,
        n_coments: 7,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 2,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 5,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 3,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 3,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 4,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 5,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 5,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 5,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 6,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 3,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id: 7,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 5,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:8,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 7,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:9,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 3,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:10,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 2,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:11,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 4,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:12,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 1,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:13,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 2,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:14,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 5,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:15,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 7,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:16,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 3,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:17,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 4,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:18,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 2,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:19,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 3,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:20,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 1,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:21,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 3,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:22,
        image: faker.image.image(),
        text: faker.lorem.text(),
        n_likes: 0,
        n_coments: 2,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
