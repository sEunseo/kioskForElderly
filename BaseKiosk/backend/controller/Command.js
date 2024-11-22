const commandModel = require('../model/Commande.model');
const categoryModel = require('../model/category.model')
const logger = require('../config/logger')
// const ProduitModel = require('../model/Produit.model');
const CodePromoModel = require('../model/CodePromo.model')
const tablemodel = require('../model/table.model')
const crypto = require('crypto');
const date = require('date-and-time');
let idproducts = '';
let products = [];
let table, codePromo;

async function Addcommand(req, res) {
    idproducts = req.body.products;
    async function setDatacommand() {
        for (let x = 0; x < idproducts.length; x++) {

            const category = await categoryModel.findOne({
                NameCat: idproducts[x].idcat
            })
            const subcat = await category.SubCAt.find(function (cat) {
                if (cat.NameSubCat == idproducts[x].idsubcat)
                    return true;
            });
            //console.log(subcat)
            for (let y = 0; y < subcat.Product.length; y++) {
                if (subcat.Product[y].id == idproducts[x].idpro)
                    products.push(subcat.Product[y]);
            }

        }
        table = await tablemodel.tableModel.findById(req.body.tableId);
        codePromo = await CodePromoModel.CodePromoModel.findOne({
            Code: req.body.codePromoId
        })
        console.log(codePromo)
    }
    await setDatacommand()
    console.log("after set ")
    const now = new Date();
    let command = {
        NumCommande: crypto.randomBytes(6).toString('hex'),
        DateCommande: date.format(now, 'YYYY/MM/DD HH:mm:ss'),
        Produit: products,
        Table: table,
        CodePromo: codePromo,
    };
    commandModel.create(command)
        .then(() => {
            logger.info('command added');
           // logger.
            return res.status(200).json({
                "message": `commend added`,
                "numCommande": command.NumCommande,
               
            });
            
        }).catch(err => {
            return res.status(500).json({
                "message": " command Is not added",
                "err": err
            });
        })
    products = [];
}
//get command by id 
function getCommandById(req, res) {
    console.log(req.params.NumCommande)
    commandModel.findOne({
        NumCommande: `${req.params.NumCommande}`
    }).then((command) => {
        res.json(command)
    })
}
module.exports = {
    Addcommand,
    getCommandById
}