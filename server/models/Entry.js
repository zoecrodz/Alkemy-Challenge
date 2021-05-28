const S = require('sequelize');
const db = require('../db');

class Entry extends S.Model {}

Entry.init({
    amount: {
        type: S.FLOAT
    },
    detail: {
        type: S.TEXT
    },
}, {
    sequelize: db, modelName: 'entry' 
})

module.exports = Entry