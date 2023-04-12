const mongoose = require('mongoose');

const yogaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: String, required: true },
    time: { type: String, required: true },
    link: { type: String, required: true }
});

const yoga = mongoose.model("yoga", yogaSchema);

module.exports = { yoga };
