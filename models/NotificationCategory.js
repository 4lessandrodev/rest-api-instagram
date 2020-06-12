/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('NotificationCategory', {
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
      comment: "null",
    },
    endPoint: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "null",
    }
  }, {
      tableName: 'notification_categories',
      timestamps: false
  });
};
