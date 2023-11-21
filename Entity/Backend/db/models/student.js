'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(
        models.Classroom,
        {
          onDelete: 'CASCADE',
          foreignKey: "classroom_id"
        }
      )
      Student.belongsTo(
        models.User,
        {
          onDelete: "CASCADE",
          foreignKey: "user_id"
        }
      )
    }
  }
  Student.init({
    classroom_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Classrooms'
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
    modelName: 'Student',
  });
  return Student;
};
