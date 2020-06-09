'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'likes',
      [
        {
          id: 1,
          userId: 1,
          postId: 1,
        },
        {
          id: 2,
          userId: 1,
          postId: 2,
        },
        {
          id: 3,
          userId: 1,
          postId: 3,
        },
        {
          id: 4,
          userId: 1,
          postId: 4,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('likes', null, {});
  },
};
