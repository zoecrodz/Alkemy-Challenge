const express = require('express');
const router = express.Router();
const user = require("./user")
const me = require("./me")
const transaction = require("./transaction")

router.use('/user', user)
router.use("/me", me)
router.use("/transaction", transaction)

module.exports = router