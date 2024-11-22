const mongoose = require("mongoose");
const Produit = require('./Produit.model')
const Schema = mongoose.Schema;
const SubCategory = new Schema({
    NameSubCat: {
            type: String,
            required: true,
    },
    Product: [Produit.Produit]
});
const SubCategoryModel = mongoose.model("SubCategory", SubCategory);
module.exports = {
        SubCategoryModel,
        SubCategory};
//console.log(Produit)