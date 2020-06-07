/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'Coment',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true,
      },
      text: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: 'null',
      },
      usersId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: 'null',
        references: {
          model: 'User',
          key: 'id',
        },
      },
      postsId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: 'null',
        references: {
          model: 'Post',
          key: 'id',
        },
      },
    },
    {
      tableName: 'coments',
    }
  );
};
