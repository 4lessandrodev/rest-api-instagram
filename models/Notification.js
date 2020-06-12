/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Notification = sequelize.define(
    'Notification',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true,
      },
      categoryId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: 'null',
        references: {
          model: 'NotificationCategory',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: 'null',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      receiverId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: 'null',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      read: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: Sequelize.literal('0'),
        comment: 'this reference notification checked as read'
      },
      elementId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        comment: 'this id reference the element from interaction'
      }
    },
    {
      tableName: 'notifications',
    }
  );

  Notification.associate = (models) => {
    User.hasOne(models.NotificationCategory, { as: 'coments', foreignKey: 'categoryId' });
    User.hasOne(models.User, { as: 'user_sent', foreignKey: 'userId' });
    User.belongsTo(models.User, { as: 'user_receive', foreignKey: 'receiverId' });
  };

  return Notification;
};
