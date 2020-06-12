/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let Follower = sequelize.define('Follower', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: 'null',
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'User',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    followerId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'User',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }
  }, {
      tableName: 'followers',
      timestamps: false
  });

  Follower.assciate = (models) => {
    Follower.belongsTo(models.User, {foreignKey:'userId', as:'user_followed'});
    Follower.belongsTo(models.User, {foreignKey:'followerId', as:'follower'});
  };

  return Follower;
};
