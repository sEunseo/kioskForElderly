const express = require('express');
const router = express.Router();
const Command = require('../controller/Command');
//add command
router.post('/', (req, res) => {
    Command.Addcommand(req, res)
});
router.get('/:NumCommande', (req, res) => {
    Command.getCommandById(req, res)
});
module.exports = router;