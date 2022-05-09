// Creación del producto
const mongoose = require("mongoose");

const objetoCarSchema = {
    id_car: Number,
    seats: Number,
   
};

const carSchema = mongoose.Schema(objetoCarSchema, {versionKey: false})


const Car = mongoose.model("cars", carSchema);

module.exports = Car