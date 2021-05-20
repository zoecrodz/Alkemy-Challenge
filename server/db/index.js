const S = require('sequelize');
const db = new S("postgres:/alkemy", {
  logging: false,
  dialect: 'postgres',
});

module.exports = db;