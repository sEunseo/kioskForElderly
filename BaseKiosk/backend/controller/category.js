const categoryModel = require('../model/category.model')

//show all categories
function getcategories(req, res) {
    categoryModel.find().then((categories) => {
        res.json(categories)
    })
}

//Add categories
function addcategories(req, res) {
  const category = new categoryModel(req.body);

  category.save((err, category) => {
    if(err){
      return res.status(404).json({
        error: 'bad request !!'
      })
    }
    res.json({
      category
    })
  })
}


async function getcategory(req, res, next) {

  let categories

  try {
      categories = await categoryModel.findById(req.params.id)
      if (categories == null) {
          return res.status(404).json({ message: 'Cannot find category'})
      }
  } catch (err) {
      
      return res.status(500).json({ message: err.message })
  }

  res.categories = categories
  next()
}


//updating category
 async function updatedcategory (req, res)  {
  if (req.body.NameCat != null) {
      res.categories.NameCat = req.body.NameCat
  }
  
  try {
      const updatedcategory = await res.categories.save()
      res.json(updatedcategory)

  } catch (err) {
      res.status(400).json({ message: err.message })
      
  }

}

//Deleting category
 async function deleteCat (req, res) {
  try {

      await res.categories.remove()
      res.json({ message: 'Deleted Succesfully' })
  } catch (err) {
      res.status(500).json({ message: err.message })
      
  }


}

module.exports = {
  getcategories, addcategories, getcategory, deleteCat, updatedcategory
};