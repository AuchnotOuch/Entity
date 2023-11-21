'use strict';
const { Model, Validator } = require('sequelize');
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toSafeObject() {
      const { id, username, email } = this;
      return { id, username, email }
    }
    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString())
    }
    static getCurrentUserById(id) {
      return User.scope("currentUser").findByPk(id)
    }
    static async login({ credential, password }) {
      const { Op } = require('sequelize')
      const user = await User.scope('loginUser').findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential
          }
        }
      })
      if (user && user.validatePassword(password)) {
        return await User.scope('currentUser').findByPk(user.id)
      }
    }
    static async signup({ username, email, password }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        username,
        email,
        hashedPassword
      })
      return await User.scope('currentUser').findByPk(user.id)
    }
    static associate(models) {
      // define association here
      User.belongsToMany(
        models.User, {
        through: models.Follow,
        as: 'followers',
        foreignKey: 'user_id_followee'
      }
      )
      User.belongsToMany(
        models.User, {
        through: models.Follow,
        as: 'following',
        foreignKey: 'user_id_follower'
      }
      )
      User.hasMany(
        models.Chat,
        {
          onDelete: "CASCADE",
          foreignKey: "owner_id"
        }
      )
      User.hasMany(
        models.ChatMessage,
        {
          onDelete: "CASCADE",
          foreignKey: "user_id"
        }
      )
      User.hasMany(
        models.Classroom,
        {
          onDelete: "CASCADE",
          foreignKey: "owner_id"
        }
      )
      User.hasMany(
        models.Comment,
        {
          onDelete: "CASCADE",
          foreignKey: 'owner_id'
        }
      )
      User.hasMany(
        models.Council,
        {
          onDelete: "CASCADE",
          foreignKey: 'owner_id'
        }
      )
      User.hasMany(
        models.CouncilMember,
        {
          onDelete: "CASCADE",
          foreignKey: 'user_id'
        }
      )
      User.hasMany(
        models.Experience,
        {
          onDelete: "CASCADE",
          foreignKey: 'owner_id'
        }
      )
      User.hasMany(
        models.Group,
        {
          onDelete: "CASCADE",
          foreignKey: 'owner_id'
        }
      )
      User.hasMany(
        models.Institution,
        {
          onDelete: "CASCADE",
          foreignKey: 'owner_id'
        }
      )
      User.hasMany(
        models.Like,
        {
          onDelete: "CASCADE",
          foreignKey: 'owner_id'
        }
      )
      User.hasMany(
        models.Membership,
        {
          onDelete: "CASCADE",
          foreignKey: 'user_id'
        }
      )
      User.hasMany(
        models.Participant,
        {
          onDelete: "CASCADE",
          foreignKey: 'user_id'
        }
      )
      User.hasMany(
        models.Place,
        {
          onDelete: "CASCADE",
          foreignKey: 'owner_id'
        }
      )
      User.hasMany(
        models.Poll,
        {
          onDelete: "CASCADE",
          foreignKey: 'owner_id'
        }
      )
      User.hasMany(
        models.PollHistory,
        {
          onDelete: "CASCADE",
          foreignKey: 'voter_id'
        }
      )
      User.hasOne(
        models.Portfolio,
        {
          onDelete: "CASCADE",
          foreignKey: 'owner_id'
        }
      )
      User.hasMany(
        models.Post,
        {
          onDelete: "CASCADE",
          foreignKey: 'owner_id'
        }
      )
      User.hasMany(
        models.PrivateMessage,
        {
          onDelete: "CASCADE",
          foreignKey: 'owner_id'
        }
      )
      User.hasMany(
        models.PrivateMessage,
        {
          onDelete: "CASCADE",
          foreignKey: 'recipient_id'
        }
      )
      User.hasMany(
        models.Spot,
        {
          onDelete: "CASCADE",
          foreignKey: 'user_id'
        }
      )
      User.hasMany(
        models.Student,
        {
          onDelete: "CASCADE",
          foreignKey: 'user_id'
        }
      )
    }
  };

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 256]
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 256]
        }
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256]
        }
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60]
        }
      }
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
        }
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] }
        },
        loginUser: {
          attributes: {}
        }
      }
    }
  );
  return User;
};
