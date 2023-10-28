'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Enrollment.belongsTo(
        models.Institution,
        {
          onDelete: "CASCADE",
          foreignKey: 'institution_id',
          as: 'institution'
        }
      )
      Membership.belongsTo(
        models.User,
        {
          onDelete: 'CASCADE',
          foreignKey: 'user_id',
          as: 'member'
        }
      )
    }
  }
  Enrollment.init({
    institution_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Institutions"
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users"
      }
    }
  }, {
    sequelize,
    modelName: 'Enrollment',
  });
  return Enrollment;
};
