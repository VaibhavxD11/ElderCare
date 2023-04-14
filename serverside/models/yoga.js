const mongoose = require('mongoose');

const yogaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: String, required: true },
    time: { type: String, required: true },
    link: { type: String, required: true },
    email: { type: String, required: true },
    uid: { type: Number, required: true }
});

const Yoga = mongoose.model("yoga", yogaSchema);

module.exports = { Yoga };
