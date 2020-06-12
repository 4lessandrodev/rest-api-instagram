'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        comment: "null"
      },
      email: {
        type: Sequelize.STRING(80),
        allowNull: false,
        comment: "null"
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "null"
      },
      name: {
        type: Sequelize.STRING(45),
        allowNull: false,
        defaultValue: 'username',
        comment: "null"
      },
      avatar: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: 'avatar.png',
        comment: "null"
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: "null"
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: "null"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
