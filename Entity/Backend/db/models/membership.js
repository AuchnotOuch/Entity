'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Membership.belongsTo(
        models.Group,
        {
          onDelete: "CASCADE",
          foreignKey: 'group_jd',
          as: 'group'
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
  Membership.init({
    group_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Groups"
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
    modelName: 'Membership',
  });
  return Membership;
};
