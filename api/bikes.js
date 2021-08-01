const express = require("express")

const router = express.Router()

const {bikes: ctrl} = require("../controllers")

router.get("/",ctrl.getBikes);
router.delete("/:id",ctrl.deleteBike);
router.post("/",express.json(),ctrl.addNewBike);
router.patch("/:id",express.json(),ctrl.patchBike);

module.exports = router;