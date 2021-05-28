const express = require("express");
const router = express.Router();
const tokenMiddleware = require("./token");
const { User } = require ("../models/");  
 
router.get("/", tokenMiddleware, (req, res) => {
    console.log("??") 
    User.findByPk(req.user.id)
    .then(user => {
        res.status(200).json(user)})
    .catch(err => console.log(err))
})

module.exports = router