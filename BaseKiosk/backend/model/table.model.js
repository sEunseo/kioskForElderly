const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tableschema = new Schema({
    numTable: {
        type: Number,
        required: true,
    },
    isBusy: {
        type: Boolean,
        required: true,
    }
});
const tableModel = mongoose.model("table", tableschema);
//  let carda = {
//      numTable: 12,
//       isBusy: "false"

// } 
//   tableModel.create(carda)
module.exports = {
        tableModel,
        tableschema}