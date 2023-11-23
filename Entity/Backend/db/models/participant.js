'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Participant.belongsTo(
        models.Experience,
        {
          foreignKey: 'experience_id'
        }
      )
      Participant.belongsTo(
        models.User,
        {
          foreignKey: 'owner_id'
        }
      )
    }
  }
  Participant.init({
    experience_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Experiences'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    }
  }, {
    sequelize,
    modelName: 'Participant',
  });
  return Participant;
};
