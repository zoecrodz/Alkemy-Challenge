const User = require("./User")
const Transaction = require("./Transaction")

User.hasMany(Transaction)

module.exports = {User, Transaction}