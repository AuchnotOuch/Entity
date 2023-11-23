'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Poll extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Poll.belongsTo(
        models.User,
        {
          foreignKey: 'owner_id'
        }
      )
      Poll.hasMany(
        models.PollOption,
        {
          onDelete: 'CASCADE',
          foreignKey: "poll_id"
        }
      )
      Poll.hasMany(
        models.PollHistory,
        {
          foreignKey: "poll_id"
        }
      )
    }
  }
  Poll.init({
    content: DataTypes.STRING,
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    }
  }, {
    sequelize,
    modelName: 'Poll',
  });
  return Poll;
};
