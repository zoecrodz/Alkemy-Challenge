const User = require("./User")
const Transaction = require("./Transaction")
const Outgoings = require("./Outgoings")
const Entry = require("./Entry")

User.hasMany(Transaction)

module.exports = {User, Transaction}