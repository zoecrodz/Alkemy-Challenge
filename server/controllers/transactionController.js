const {Transaction, User} = require("../models")

const transactionController = {
    create: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id)
            const entry = await Transaction.create(req.body)
            user.addTransaction(entry)
            res.status(200).send(entry)
        } catch (err) {
            console.log(err)
        }
    },
    getAll: async (req, res) => {
        try {
            const all = await Transaction.findAll({limit: 10, order: [['createdAt', 'DESC']], where: {
                userId: req.params.id
            }})
            res.status(200).send(all)
        } catch (err) {
            console.log(err)
        }
    },
    delete: async (req, res) => {
        try {
            const deleted = await Transaction.destroy({where: {
                id: req.params.id
            }})
            res.sendStatus(200).send(deleted)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = transactionController