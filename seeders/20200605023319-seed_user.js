'use strict';
const faker = require('faker');
const moment = require('moment');
const bcrypt = require('bcrypt');
let date = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('pass123', 10),
        avatar: faker.image.avatar(),
        createdAt: moment(date).format('YYYY-MM-DD hh:mm:ss'),
        updatedAt: moment(date).format('YYYY-MM-DD hh:mm:ss')
      },
      {
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
