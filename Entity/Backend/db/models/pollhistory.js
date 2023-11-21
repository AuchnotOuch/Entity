'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PollHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PollHistory.belongsTo(
        models.Poll,
        {
          onDelete: "CASCADE",
          foreignKey: "poll_id"
        }
      )
      PollHistory.belongsTo(
        models.PollOption,
        {
          foreignKey: "poll_option_id"
        }
      )
      PollHistory.belongsTo(
        models.User,
        {
          foreignKey: "voter_id"
        }
      )
    }
  }
  PollHistory.init({
    poll_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Polls'
      }
    },
    poll_option_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'PollOptions'
      }
    },
    voter_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
  }, {
    sequelize,
    modelName: 'PollHistory',
  });
  return PollHistory;
};
