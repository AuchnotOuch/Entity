'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Council extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Council.belongsTo(
        models.User,
        {
          foreignKey: 'owner_id'
        }
      )
      Council.hasMany(
        models.CouncilMember,
        {
          foreignKey: "council_id"
        }
      )
    }
  }
  Council.init({
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
    modelName: 'Council',
  });
  return Council;
};
