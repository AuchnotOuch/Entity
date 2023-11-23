'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Place.belongsTo(
        models.User,
        {
          foreignKey: 'owner_id'
        }
      )
      Place.hasMany(
        models.Spot,
        {
          foreignKey: "user_id"
        }
      )
    }
  }
  Place.init({
    name: DataTypes.STRING,
    private: DataTypes.BOOLEAN,
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
  }, {
    sequelize,
    modelName: 'Place',
  });
  return Place;
};
