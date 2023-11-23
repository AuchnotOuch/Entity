'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Institution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Institution.belongsTo(
        models.User,
        {
          onDelete: "CASCADE",
          foreignKey: 'owner_id',
          as: 'Owner'
        }
      )
      Institution.hasMany(
        models.Enrollment,
        {
          onDelete: "CASCADE",
          foreignKey: 'institution_id',
        }
      )
    }
  }
  Institution.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 256]
      }
    },
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      }
    }
  }, {
    sequelize,
    modelName: 'Institution',
  });
  return Institution;
};
