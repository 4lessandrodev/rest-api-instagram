'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('likes', [
      {
          usersId: 1,
          postsId: 1
      },
      {
          usersId: 1,
          postsId: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('likes', null, {});
  }
};
