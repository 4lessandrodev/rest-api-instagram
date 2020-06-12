'use strict';
const faker = require('faker');
const moment = require('moment');
let date = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('notifications', [
      {
        id: 1,
        categoryId: 1,
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        read: 0,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        elementId: Math.ceil(Math.random() * 10)
      },
      {
        id: 2,
        categoryId: 1,
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        read: 0,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        elementId: Math.ceil(Math.random() * 10)
      },
      {
        id: 3,
        categoryId: 2,
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        read: 0,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        elementId: Math.ceil(Math.random() * 10)
      },
      {
        id: 4,
        categoryId: 3,
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        read: 0,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        elementId: Math.ceil(Math.random() * 10)
      },
      {
        id: 5,
        categoryId: 1,
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        read: 0,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        elementId: Math.ceil(Math.random() * 10)
      },
      {
        id: 6,
        categoryId: 2,
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        read: 0,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        elementId: Math.ceil(Math.random() * 10)
      },
      {
        id: 7,
        categoryId: 1,
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        read: 0,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        elementId: Math.ceil(Math.random() * 10)
      },
      {
        id: 8,
        categoryId: 2,
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        read: 0,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        elementId: Math.ceil(Math.random() * 10)
      },
      {
        id: 9,
        categoryId: 2,
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        read: 0,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        elementId: Math.ceil(Math.random() * 10)
      },{
        id: 10,
        categoryId: 1,
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        read: 0,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        elementId: Math.ceil(Math.random() * 10)
      },
      {
        id: 11,
        categoryId: 1,
        userId: Math.ceil(Math.random() * 10),
        receiverId: Math.ceil(Math.random() * 10),
        read: 0,
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        elementId: Math.ceil(Math.random() * 10)
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('notifications', null, {});
  }
};
