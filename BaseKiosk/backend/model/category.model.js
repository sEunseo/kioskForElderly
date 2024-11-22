const mongoose = require("mongoose");
const subCat = require('./subCategory.model')
const Schema = mongoose.Schema;
const category = new Schema({
    NameCat: {
           type: String,
            required: true,

    },
    SubCAt: [subCat.SubCategory]
});

const categoryModel = mongoose.model("Category", category);

// let carda = {
//     NameCat: "Nos menu",
//     SubCAt: [{
//         NameSubCat: "son category",
//         Product: [{
//             priceProduct: "60 dh",
//             imageProduct: "./image/image",
//             NameProduct: "boit a partager",
//             Ingredient: [{
//                     Ingredient: "chicken Mc nuggets"
//                 },
//                 {
//                     Ingredient: "chicken stack"
//                 },
//                 {
//                     Ingredient: "croquettes"
//                 },
//                 {
//                     Ingredient: "fromage pouvon"
//                 },
//             ]
//         }, ]
//     }, {
//         NameSubCat: "maxi best of",
//         Product: [{
//                 priceProduct: "60 dh",
//                 imageProduct: "./image/image",
//                 NameProduct: "maxi best of Humberger",
//                 Ingredient: [{
//                         Ingredient: "sandwish coisi"
//                     },
//                     {
//                         Ingredient: "frite"
//                     },
//                     {
//                         Ingredient: "sode"
//                     },
//                 ]
//             },
//             {
//                 priceProduct: "60 dh",
//                 imageProduct: "./image/image",
//                 NameProduct: "maxi best of chesburger",
//                 Ingredient: [{
//                         Ingredient: "sandwish coisi"
//                     },
//                     {
//                         Ingredient: "frite"
//                     },
//                     {
//                         Ingredient: "sode"
//                     },
//                 ]
//             },
//             {
//                 priceProduct: "60 dh",
//                 imageProduct: "./image/image",
//                 NameProduct: "maxi best of fish burger",
//                 Ingredient: [{
//                         Ingredient: "sandwish coisi"
//                     },
//                     {
//                         Ingredient: "frite"
//                     },
//                     {
//                         Ingredient: "sode"
//                     },
//                 ]
//             },
//             {
//                 priceProduct: "60 dh",
//                 imageProduct: "./image/image",
//                 NameProduct: "maxi best of fish chiken burger",
//                 Ingredient: [{
//                         Ingredient: "sandwish coisi"
//                     },
//                     {
//                         Ingredient: "frite"
//                     },
//                     {
//                         Ingredient: "sode"
//                     },
//                 ]
//             },
//         ]
//     }, {
//         NameSubCat: " best of",
//         Product: [{
//                 priceProduct: "60 dh",
//                 imageProduct: "./image/image",
//                 NameProduct: "best of Humberger",
//                 Ingredient: [{
//                         Ingredient: "sandwish coisi"
//                     },
//                     {
//                         Ingredient: "frite"
//                     },
//                     {
//                         Ingredient: "sode"
//                     },
//                 ]
//             },
//             {
//                 priceProduct: "60 dh",
//                 imageProduct: "./image/image",
//                 NameProduct: " best of chesburger",
//                 Ingredient: [{
//                         Ingredient: "sandwish coisi"
//                     },
//                     {
//                         Ingredient: "frite"
//                     },
//                     {
//                         Ingredient: "sode"
//                     },
//                 ]
//             },
//             {
//                 priceProduct: "60 dh",
//                 imageProduct: "./image/image",
//                 NameProduct: " best of fish burger",
//                 Ingredient: [{
//                         Ingredient: "sandwish coisi"
//                     },
//                     {
//                         Ingredient: "frite"
//                     },
//                     {
//                         Ingredient: "sode"
//                     },
//                 ]
//             },
//             {
//                 priceProduct: "60 dh",
//                 imageProduct: "./image/image",
//                 NameProduct: "best of fish chiken burger",
//                 Ingredient: [{
//                         Ingredient: "sandwish coisi"
//                     },
//                     {
//                         Ingredient: "frite"
//                     },
//                     {
//                         Ingredient: "sode"
//                     },
//                 ]
//             },
//         ]
//     }, {
//         NameSubCat: " happy meal",
//         Product: [{
//                 priceProduct: "60 dh",
//                 imageProduct: "./image/image",
//                 NameProduct: "happy meal Humberger",
//                 Ingredient: [{
//                         Ingredient: "sandwish choisi"
//                     },
//                     {
//                         Ingredient: "mini salade"
//                     },
//                     {
//                         Ingredient: "desert"
//                     },
//                     {
//                         Ingredient: "frite"
//                     },
//                     {
//                         Ingredient: "boisson"
//                     },
//                 ]
//             },
//             {
//                 priceProduct: "60 dh",
//                 imageProduct: "./image/image",
//                 NameProduct: " happy meal chesburger",
//                 Ingredient: [{
//                         Ingredient: "sandwish choisi"
//                     },
//                     {
//                         Ingredient: "frite"
//                     },
//                     {
//                         Ingredient: " boisson sode"
//                     },
//                     {
//                         Ingredient: " mini salade"
//                     },
//                     {
//                         Ingredient: " desert"
//                     },
//                 ]
//             },
//             {
//                 priceProduct: "60 dh",
//                 imageProduct: "./image/image",
//                 NameProduct: " happy meal chickenburger",
//                 Ingredient: [{
//                         Ingredient: "sandwish coisi"
//                     },
//                     {
//                         Ingredient: "frite"
//                     },
//                     {
//                         Ingredient: "mini salade"
//                     },
//                     {
//                         Ingredient: "desert"
//                     },
//                     {
//                         Ingredient: " boisson soda"
//                     },
//                 ]
//             },
//             {
//                 priceProduct: "60 dh",
//                 imageProduct: "./image/image",
//                 NameProduct: "happy meal Mc Nuggets",
//                 Ingredient: [{
//                         Ingredient: "sandwish choisi"
//                     },
//                     {
//                         Ingredient: "mini salade"
//                     },
//                     {
//                         Ingredient: "desert"
//                     },
//                     {
//                         Ingredient: "frite"
//                     },
//                     {
//                         Ingredient: "boison soda"
//                     },
//                 ]
//             },
//         ]
//     }]

// }
//              
//        
//     
// 
//categoryModel.create(carda)

module.exports = categoryModel;