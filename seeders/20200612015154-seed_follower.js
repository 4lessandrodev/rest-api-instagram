'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'followers',
      [
        {
          id: 1,
          userId: 1,
          followerId: 2,
        },
        {
          id: 2,
          userId: 1,
          followerId: 3,
        },
        {
          id: 3,
          userId: 1,
          followerId: 4,
        },
        {
          id: 4,
          userId: 1,
          followerId: 5,
        },
        {
          id: 5,
          userId: 2,
          followerId: 2,
        },
        {
          id: 6,
          userId: 2,
          followerId: 3,
        },
        {
          id: 7,
          userId: 3,
          followerId: 4,
        },
        {
          id: 8,
          userId: 4,
          followerId: 5,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('followers', null, {});
  },
};
