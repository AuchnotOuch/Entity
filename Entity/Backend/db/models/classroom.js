'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Classroom.hasMany(
        models.Student,
        {
          onDelete: "CASCADE",
          foreignKey: "classroom_id"
        }
      )
      Classroom.belongsTo(
        models.User,
        {
          onDelete: "CASCADE",
          foreignKey: "owner_id"
        }
      )
    }
  }
  Classroom.init({
    name: DataTypes.STRING,
    private: DataTypes.BOOLEAN,
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    }
  }, {
    sequelize,
    modelName: 'Classroom',
  });
  return Classroom;
};
