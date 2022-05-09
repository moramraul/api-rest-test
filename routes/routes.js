const { Router } = require("express")
const router = Router()
var cars = require("../controllers/cars.controllers")
var journey = require("../controllers/journey.controllers")

router.get("/status", (req, res) => {
    res.sendStatus(200);
})

router.put("/cars", cars.loadCars)

router.post("/journey", journey.createJourney)

router.post("/locate", journey.locateJourney)

router.post("/dropoff", journey.endJourney)


module.exports = router