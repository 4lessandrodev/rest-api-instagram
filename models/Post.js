/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Post = sequelize.define(
    'Post',
    {
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
        comment: 'null',
        references: {
          model: 'User',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      image: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: 'null',
      },
      text: {
        type: DataTypes.STRING(250),
        allowNull: true,
        comment: 'null',
      },
      n_likes: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        comment: 'null',
      },
      n_coments: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        comment: 'null',
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        comment: 'null',
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        comment: 'null',
      },
    },
    {
      tableName: 'posts',
    }
  );

  Post.associate = (models) => {
    Post.hasMany(models.Coment);
  };

  return Post;
};
