const S = require('sequelize');
const db = require('../db');
const crypto = require("crypto");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastName: {
        type: S.STRING,
        allowNull: false,
      },
    mail: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
      validate: {
        len: [5,15]
      }
    },
    salt: S.STRING,
    external:{
      type: S.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: 'user' },
);

User.addHook("beforeCreate", (user) => {
  user.salt = crypto.randomBytes(20).toString("hex");
  user.password = user.hashPassword(user.password);
});

User.prototype.hashPassword = function (password) {
  return crypto.createHmac("sha1", this.salt).update(password).digest("hex");
};

User.prototype.validatePassword = function (recibPassword) {
  return this.hashPassword(recibPassword) === this.password
};

module.exports = User;