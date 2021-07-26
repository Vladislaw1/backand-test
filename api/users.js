const express = require("express")

const {users: ctrl} = require("../controllers")

const router = express.Router()

router.get("/",ctrl.getAll);
router.get("/:id",ctrl.getOne);

module.exports = router;