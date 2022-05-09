// Creación del producto
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const objetoJourneySchema = {
    id_group: Number,
    id_car: Number,
    seats: Number
};

const journeySchema = mongoose.Schema(objetoJourneySchema, {versionKey: false})

journeySchema.plugin(AutoIncrement, {inc_field: 'id_journey'});

const Journey = mongoose.model("journeys", journeySchema);

module.exports = Journey