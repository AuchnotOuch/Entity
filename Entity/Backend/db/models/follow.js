'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Follow.belongsTo(
        models.User,
        {
          onDelete: "CASCADE",
          foreignKey: 'user_id_follower',
          as: 'follower'
        }
      )
      Follow.belongsTo(
        models.User,
        {
          onDelete: 'CASCADE',
          foreignKey: 'user_id_followee',
          as: 'followee'
        }
      )
    }
  }
  Follow.init({
    user_id_follower: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
    user_id_followee: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    }
  }, {
    sequelize,
    modelName: 'Follow',
  });
  return Follow;
};
