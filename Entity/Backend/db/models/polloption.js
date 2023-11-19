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
    }
  }
  PollOption.init({
    option: DataTypes.STRING,
    poll_id: DataTypes.INTEGER,
    votes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PollOption',
  });
  return PollOption;
};