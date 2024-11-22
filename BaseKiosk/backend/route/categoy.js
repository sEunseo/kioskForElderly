const express = require('express');
const router = express.Router();
const Category = require('../controller/category');

//get all category
router.get('/', (req, res) => {
    Category.getcategories(req,res)
});

//One Category
router.get('/:id' , Category.getcategory , (req, res) => {
    res.json(res.categories)
})

//Add Category
router.post('/addcategory', Category.addcategories);


//Delete Category
router.delete('/delete/:id', Category.getcategory, Category.deleteCat);

//Update Category 
router.put('/update/:id', Category.getcategory, Category.updatedcategory);





module.exports = router;