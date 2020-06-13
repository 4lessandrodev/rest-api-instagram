/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        comment: 'null',
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING(80),
        allowNull: false,
        comment: 'null',
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: 'null',
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false,
        defaultValue: 'username',
        comment: 'null',
      },
      avatar: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: 'avatar.png',
        comment: 'null',
      }
    },
    {
      tableName: 'users',
    }
    );
    
    User.associate = (models) => {
      User.hasMany(models.Coment, { as: 'user_coment', foreignKey: 'postId' });
      User.hasMany(models.Post, { as: 'posts', foreignKey: 'userId' });
    };
    
    return User;
  };
  