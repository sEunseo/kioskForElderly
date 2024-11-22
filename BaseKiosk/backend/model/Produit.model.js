const mongoose = require("mongoose");
const ingedient = require('./Ingredients.model');
const Schema = mongoose.Schema;
const Produit = new Schema({
    NameProduct: {
             type: String,
                 required: true,
      
    },
    priceProduct: {
             type: Number,
                 required: true,
        
    },
    imageProduct: {
           type: String,
               required: true,
  
    },

    Ingredient: [ingedient.Ingredient]
});
const ProductModel = mongoose.model("Produit", Produit);
// let carda = {
//     NameProduct: "djad mhamer",
//     IngredientId: " ingrediant1 id",

// };
//  ProductModel.create(carda)
module.exports = {
    ProductModel,
    Produit
};