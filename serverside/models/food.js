const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    breakfast: { type: String },
    lunch: { type: String},
    hightea: { type: String},
    dinner: { type: String},
    email: { type: String, required: true },
    uid: { type: Number, required: true }
});

const Food = mongoose.model("food", foodSchema);

module.exports = { Food };
