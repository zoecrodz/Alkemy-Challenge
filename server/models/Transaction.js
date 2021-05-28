const S = require("sequelize");
const db = require("../db");

class Transaction extends S.Model {}

Transaction.init(
  {
    type: {
      type: S.ENUM({
        values: ["entry", "outgoing"]}),
        allowNull: false
    },
    amount: {
      type: S.FLOAT,
      allowNull: false
    },
    detail: {
      type: S.TEXT,
      allowNull: true,
    },
  },
  { sequelize: db, modelName: "transaction" }
);

module.exports = Transaction;
