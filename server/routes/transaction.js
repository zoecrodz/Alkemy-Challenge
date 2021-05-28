const express = require("express");
const router = express.Router(); 
const transactionController = require("../controllers/transactionController")

router.post("/:id", transactionController.create)
router.get("/:id", transactionController.getAll)
router.delete("/:id", transactionController.delete)

module.exports = router
