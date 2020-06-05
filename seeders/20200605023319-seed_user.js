'use strict';
const faker = require('faker');
const moment = require('moment');
const bcrypt = require('bcrypt');
let date = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id:1,
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:2,
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:3,
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:4,
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:5,
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:6,
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:7,
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:8,
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:9,
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:10,
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        id:11,
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
