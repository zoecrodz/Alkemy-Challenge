const express = require("express");
const router = express.Router();
const { Transaction, User } = require ("../models");  

router.post("/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        const entry = await Transaction.create(req.body)
        user.addTransaction(entry)
        res.status(200).send(entry)
    } catch (err) {
        console.log(err)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const all = await Transaction.findAll({where: {
            userId: req.params.id
        }})
        res.status(200).send(all)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router
