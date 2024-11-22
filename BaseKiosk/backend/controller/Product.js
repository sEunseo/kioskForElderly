const categoryModel = require('../model/category.model')
//show product by sub cat 
//show all Product cat in a given category  
async function getProductBysubCat(req, res) {
    console.log("here you are !!")
    const category = await categoryModel.findOne({
        NameCat: req.params.Namecat
    })
    const subcat = await category.SubCAt.find(function (cat) {
        if (cat.NameSubCat == req.params.NameSubCat)
            return true;
    });
    console.log(req.params.NameSubCat)
    let products = [];
    for (let i = 0; i < subcat.Product.length; i++) {
        products.push(subcat.Product[i]);
    }
    res.json(products)
}
module.exports = {
    getProductBysubCat
}