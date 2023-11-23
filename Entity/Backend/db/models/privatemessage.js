'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PrivateMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PrivateMessage.belongsTo(
        models.User,
        {
          onDelete: "CASCADE",
          foreignKey: "recipient_id"
        }
      )
      PrivateMessage.belongsTo(
        models.User,
        {
          onDelete: "CASCADE",
          foreignKey: "owner_id"
        }
      )
    }
  }
  PrivateMessage.init({
    recipient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PrivateMessage',
  });
  return PrivateMessage;
};
