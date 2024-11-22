const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
const app = express();
const dbConfig = require('./config/config.js');
const bodyParser = require('body-parser');

const product = require('./model/table.model')

const subCat = require('./route/subCat')
const command = require('./route/command')
const table = require('./route/table')
const produit = require('./route/product')
const cardFid = require('./route/cardFid');
const Category = require('./route/categoy')
const codePromo = require('./route/CodePromo')
const ingrediant = require('./route/Ingredient')
app.use(express.json())
app.use(cors());
//const cardModel = require('./model/CardFid.model');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("mongodb connected.."));
app.use(bodyParser.urlencoded({
    extended: true,
    useUnifiedTopology: true
}));
app.use('/cardFid', cardFid);
app.use('/category', Category)
app.use('/codePromo', codePromo);
app.use('/ingrediant', ingrediant)
app.use('/product', produit)
app.use('/subcat', subCat)
app.use('/table', table)
app.use('/command', command)
app.use(product.tableModel)
app.listen(2021, () => {
    console.log(`fastFood app listening at port: 2021`)
})