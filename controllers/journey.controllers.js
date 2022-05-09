const mongoose = require("mongoose")
const Journey = require("../models/journey.schema");
const Car = require("../models/car.schema")
const Group = require("../models/group.schema");
const res = require("express/lib/response");

const journey = {
    createJourney: (req, res) => { createJourney(req, res) },
    locateJourney: (req, res) => { locateJourney(req, res) },
    endJourney: (req, res) => { endJourney(req, res) }
}



function createJourney(req, res) {
    const { people, id_group } = req.body
    Car.find({}, function (err, cars) {
        var size = Object.keys(cars).length;
        for (let i = 0; i < size; i++) {
            if (cars[i].seats >= people) {
                console.log("Entre en el if")
                let journey = new Journey({
                    id_group: id_group,
                    id_car: cars[i].id_car,
                    seats: cars[i].seats
                })
                journey.save();
                Car.deleteOne({ id_car: cars[i].id_car }, function (err) {
                    console.log("Deleted");
                })
                break
            }
            else {
                let group = new Group({
                    id_group: id_group,
                    people: people
                })
                group.save();
            }
        }
    });
}

function locateJourney(req, res) {
    const { id } = req.body
    if (!id) { res.sendStatus(400) }
    if (id) {
        Journey.find({ id_group: id }, function (err, journey) {
            if (journey[0] != undefined) {
                res.json({
                    id_car: journey[0].id_car,
                    seats: journey[0].seats
                })
            }
            if (journey[0] == undefined) {
                Group.find({ id_group: id }, function (err, group) {
                    if (group) { res.sendStatus(204) }
                    if (!group) { res.sendStatus(404) }
                })
            }
        })
    }

}

function endJourney(req, res) {
    const { id } = req.body
    if (!id) {
        res.sendStatus(400)
    }
    if (id) {
        Journey.find({ id_group: id }, function (err, journey) {
            if (journey[0] != undefined) {
                Journey.deleteOne({ journey }, function (err, journey) {
                    res.sendStatus(200)
                })
            }
            if (journey[0] == undefined) {
                res.sendStatus(404)
            }
        })
    }
}

module.exports = journey