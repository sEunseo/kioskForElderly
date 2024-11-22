const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CodePromo = new Schema({
    Code: {
        type: Number,
        required: true,
    },
         Promodesc: {
             type: String,
             required: true,

         },
     Promo: {
         type: Number,
         required: true,
     },
    valid: {
              type: Boolean,
              required: true,
          },


});
const CodePromoModel = mongoose.model("CodePromo", CodePromo);
// let carda = {
//     Code: 12375,
//     Promodesc: " you get 20% off ",
//     Promo: 20,
//     valid:true
// };
//  CodePromoModel.create(carda)
module.exports = {CodePromoModel,CodePromo};
