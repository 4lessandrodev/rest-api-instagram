'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
      },
      image: {
        type: Sequelize.STRING(80),
        allowNull: false,
        comment: "null"
      },
      text: {
        type: Sequelize.STRING(250),
        allowNull: true,
        comment: "null"
      },
      n_likes: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        comment: "null"
      },
      n_coments: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        comment: "null"
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        comment: "null"
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        comment: "null"
      }
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('posts');
  }
};
