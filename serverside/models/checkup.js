const mongoose = require('mongoose');

const checkupSchema = new mongoose.Schema({
    name: { type: String, required:true },
    place: { type: String, required: true },
    description: { type: String, required: true },
    email: {type: String, required:true},
    uid: { type: Number, required: true }
});

const Checkup = mongoose.model("checkup", checkupSchema);

module.exports = { Checkup };
