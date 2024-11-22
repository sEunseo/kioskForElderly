const express = require('express');
const router = express.Router();
const product = require('../controller/Product');
//get product by idsubCat
router.get('/:Namecat/:NameSubCat', (req, res) => {
    product.getProductBysubCat(req, res)
});
module.exports = router;