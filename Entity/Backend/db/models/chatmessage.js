'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ChatMessage.belongsTo(
        models.Chat,
        {
          onDelete: "CASCADE",
          foreignKey: 'chat_id'
        }
      )
      ChatMessage.belongsTo(
        models.User,
        {
          onDelete: "CASCADE",
          foreignKey: 'user_id'
        }
      )
    }
  }
  ChatMessage.init({
    chat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Chats'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    },
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ChatMessage',
  });
  return ChatMessage;
};
