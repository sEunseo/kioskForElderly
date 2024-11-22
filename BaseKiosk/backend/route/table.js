const express = require('express');
const router = express.Router();
const table = require('../controller/table');
//get free tables
router.get('/', (req, res) => {
    table.getfreetable(req,res)
});
module.exports = router;