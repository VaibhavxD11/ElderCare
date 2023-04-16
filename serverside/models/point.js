const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    point: { type: Number, required: true },
    name: {type: String, reqired: true},
    uid: { type: Number, required: true }
});

const point = mongoose.model("point", pointSchema);

module.exports = { point };
