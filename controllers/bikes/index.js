const getBikes = require("./getAllBikes")
const addNewBike = require("./addNewBike")
const deleteBike = require("./deleteBIke")
const patchBike = require("./patchBike")

module.exports = {
    addNewBike,
    getBikes,
    deleteBike,
    patchBike
}