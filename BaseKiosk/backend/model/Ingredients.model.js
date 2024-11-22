const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Ingredient = new Schema({
    Ingredient: {
           type: String,
               required: true,
       
    },
});
const IngredientModel = mongoose.model("Ingredient", Ingredient);
// let carda = {

//     NameIngredient: "poulet en tranches",

// };
// IngredientModel.create(carda)


module.exports =  {IngredientModel, Ingredient};