const User = require("./User")
const Activity = require("./Activity")
const Outgoings = require("./Outgoings")
const Entry = require("./Entry")

User.belongsToMany(Outgoings, {through: Activity})
User.belongsToMany(Entry, {through: Activity})

module.exports = {User, Activity, Outgoings, Entry}