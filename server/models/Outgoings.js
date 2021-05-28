const S = require('sequelize');
const db = require('../db');

class Outgoings extends S.Model {}

Outgoings.init({
    amount: {
        type: S.FLOAT
    },
    detail: {
        type: S.TEXT
    }
}, {
    sequelize: db, modelName: 'outgoings' 
})

module.exports = Outgoings