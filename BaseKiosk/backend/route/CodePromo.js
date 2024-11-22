const express = require('express');
const router = express.Router();
const codePromo = require('../controller/codePromo');
//get CodePromo by code
router.get('/:code', (req, res) => {
    codePromo.getCodePromo(req, res)
});
module.exports = router;