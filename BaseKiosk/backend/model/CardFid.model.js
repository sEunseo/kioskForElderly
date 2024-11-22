const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const card = new Schema({
    CodeCard: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    }
});
const cardModel = mongoose.model("Card", card);
module.exports = cardModel;