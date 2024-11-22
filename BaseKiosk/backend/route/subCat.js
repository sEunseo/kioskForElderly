const express = require('express');
const router = express.Router();
const subCat = require('../controller/SubCategory');
//get product by idsubCat
router.get('/:idcat', (req, res) => {
    subCat.getsubcategories(req,res)
});
module.exports = router;