'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('notification_categories', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true,
      },
      text: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: 'null',
      },
      endPoint: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: 'null',
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('notification_categories');
  },
};
