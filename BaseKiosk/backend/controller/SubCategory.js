const categoryModel = require('../model/category.model')
//show all sub cat in a given category  
async function getsubcategories(req, res) {
      console.log("here you are ")
    const category = await categoryModel.findById("6021b40930c79766a836b284")
    console.log(category.SubCAt[1].NameSubCat)
   // category.SubCAt[1].find()
    let Subcategories = [];
    for (let i = 0; i < category.SubCAt.length; i++) {
        Subcategories.push(category.SubCAt[i].NameSubCat);
         
    }
            res.json(Subcategories)
}
module.exports ={ getsubcategories}
