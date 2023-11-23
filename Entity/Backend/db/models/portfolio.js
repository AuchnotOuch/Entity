'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Portfolio.belongsTo(
        models.User,
        {
          onDelete: "CASCADE",
          foreignKey: 'owner_id'
        }
      )
    }
  }
  Portfolio.init({
    content: DataTypes.STRING,
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
  }, {
    sequelize,
    modelName: 'Portfolio',
  });
  return Portfolio;
};
