'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('notification_categories', [
      {
        id: 1,
        text: 'curtiu sua publicação',
        endPoint:'/posts/find/'
      },
      {
        id: 2,
        text: 'enviou mensagem',
        endPoint: '/messages/find/'
      },
      {
        id: 3,
        text: 'comentou em sua publicação',
        endPoint: '/posts/find/'
      },
      {
        id: 4,
        text: 'começou a seguir você',
        endPoint: '/followers/listfollowers/'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('notification_categories', null, {});
  }
};
