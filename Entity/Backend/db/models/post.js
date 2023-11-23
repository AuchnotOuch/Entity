'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.hasMany(
        models.Like,
        {
          onDelete: "CASCADE",
          foreignKey: "post_id",
        }
      )
      Post.belongsTo(
        models.User,
        {
          onDelete: 'CASCADE',
          foreignKey: "owner_id"
        }
      )
      Post.hasMany(
        models.Comment,
        {
          onDelete: "CASCADE",
          foreignKey: "post_id"
        }
      )
    }
  }
  Post.init({
    content: DataTypes.STRING,
    post_type: DataTypes.STRING,
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
