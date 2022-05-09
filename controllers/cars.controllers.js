const mongoose = require("mongoose")
const Car = require("../models/car.schema");


const cars = {
    loadCars: (req, res) => { loadCars(req, res) },
}

async function loadCars(req, res) {
    Car.deleteMany({}, function (err) {
        console.log("Cars removed");
    })
    const object = req.body
    console.log(object)
    var size = Object.keys(object).length;
    if (object[0].id_car && object[0].seats) {
        for (let i = 0; i < size; i++) {
            let car = new Car({
                id_car: object[i].id_car,
                seats: object[i].seats,
            })
            console.log(car);
            await car.save();
        };
        res.sendStatus(200)
    }
    else {
        res.sendStatus(400)
    }
};


module.exports = cars