'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CouncilMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CouncilMember.belongsTo(
        models.User,
        {
          onDelete: "CASCADE",
          foreignKey: 'user_id'
        }
      )
      CouncilMember.belongsTo(
        models.Council,
        {
          onDelete: "CASCADE",
          foreignKey: 'council_id'
        }
      )
    }
  }
  CouncilMember.init({
    role: DataTypes.STRING,
    council_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Councils'
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
    modelName: 'CouncilMember',
  });
  return CouncilMember;
};
