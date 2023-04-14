const mongoose = require('mongoose');

const numberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    email: { type: String, required: true },
    uid: { type: Number, required: true }
});

const number = mongoose.model("number", numberSchema);

module.exports = { number };
