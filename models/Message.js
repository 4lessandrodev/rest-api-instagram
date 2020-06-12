/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Message = sequelize.define(
    'Message',
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
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: 'null',
        references: {
          model: 'User',
          key: 'id',
        },
      },
      receiverId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: 'null',
        references: {
          model: 'User',
          key: 'id',
        },
      },
    },
    {
      tableName: 'messages',
    }
  );

  Coment.associate = (models) => {
    Coment.belongsTo(models.Post, { as: 'user_received', foreignKey: 'receiverId' });
    Coment.belongsTo(models.User, { as: 'user_sent', foreignKey: 'userId' });
  };

  return Message;
};
