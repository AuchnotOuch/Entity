'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PollOption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PollOption.belongsTo(
        models.Poll,
        {
          onDelete: 'CASCADE',
          foreignKey: 'poll_id'
        }
      )
      PollOption.hasMany(
        models.PollHistory,
        {
          foreignKey: "poll_option_id"
        }
      )
    }
  }
  PollOption.init({
    option: DataTypes.STRING,
    poll_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Polls'
      }
    },
  }, {
    sequelize,
    modelName: 'PollOption',
  });
  return PollOption;
};
