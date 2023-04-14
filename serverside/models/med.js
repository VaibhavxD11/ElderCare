const mongoose = require('mongoose');

const medSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dose: { type: String, required:true },
    breakfast: { type: String },
    lunch: { type: String },
    hightea: { type: String },
    dinner: { type: String },
    email: { type: String, required: true },
    uid: { type: Number, required: true }
});

const Med = mongoose.model("med", medSchema);

module.exports = { Med };
