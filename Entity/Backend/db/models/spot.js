'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spot.belongsTo(
        models.User,
        {
          onDelete: "CASCADE",
          foreignKey: "user_id"
        }
      )
      Spot.belongsTo(
        models.Place,
        {
          onDelete: "CASCADE",
          foreignKey: "place_id"
        }
      )
    }
  }
  Spot.init({
    place_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Places'
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
    modelName: 'Spot',
  });
  return Spot;
};
