const express = require('express');
const router = express.Router();
const ingredient = require('../controller/ingredient');
//get ingredient by id
router.get('/:id', (req, res) => {
   ingredient.getigrediantByproduct(req, res)
});
module.exports = router;