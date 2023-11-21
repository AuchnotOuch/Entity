'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Experience.hasMany(
        models.Participant,
        {
          foreignKey: "experience_id"
        }
      )
      Experience.belongsTo(
        models.User,
        {
          foreignKey: "owner_id"
        }
      )
    }
  }
  Experience.init({
    content: DataTypes.STRING,
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
  }, {
    sequelize,
    modelName: 'Experience',
  });
  return Experience;
};
