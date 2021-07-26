const express = require("express")

const router = express.Router()

const {statistic: ctrl} = require("../controllers")

// console.log(ctrl.getStat())

router.get("/",ctrl.getStat)

module.exports = router;