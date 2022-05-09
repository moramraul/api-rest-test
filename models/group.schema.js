const mongoose = require("mongoose");

const objetoGroupSchema = {
    id_group: Number,
    people: Number,
};

const groupSchema = mongoose.Schema(objetoGroupSchema, {versionKey: false})

const Group = mongoose.model("queue", groupSchema);

module.exports = Group