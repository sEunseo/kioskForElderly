const mongoose = require("mongoose");
const Produit = require('./Produit.model')
const table = require('./table.model')
const CodePromo = require('./CodePromo.model')
const Schema = mongoose.Schema;
const Command = new Schema({
    NumCommande: {
        type:String,
    },
    DateCommande: {
        type: String,
    },
    Produit: [Produit.Produit],
    Table: table.tableschema,
    CodePromo:CodePromo.CodePromo,

});
const CommandModel = mongoose.model("Command", Command);
module.exports = CommandModel;
