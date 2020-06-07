'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'likes',
      [
        {
          userId: 1,
          postId: 1,
        },
        {
          userId: 1,
          postId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('likes', null, {});
  },
};
