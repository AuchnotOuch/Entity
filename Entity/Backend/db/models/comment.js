'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(
        models.User,
        {
          onDelete: "CASCADE",
          foreignKey: 'owner_id',
        }
      )
      Comment.belongsTo(
        models.Post,
        {
          onDelete: "CASCADE",
          foreignKey: 'post_id',
        }
      )
    }
  }
  Comment.init({
    content: DataTypes.STRING,
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Posts'
      }
    },
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
