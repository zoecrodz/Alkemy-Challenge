const S = require("sequelize");
const db = require("../db");

class Activity extends S.Model {}

Activity.init(
  {
    detail: {
      type: S.TEXT,
      allowNull: true,
    },
  },
  { sequelize: db, modelName: "activity" }
);

module.exports = Activity;
