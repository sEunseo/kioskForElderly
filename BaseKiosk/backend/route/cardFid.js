const express = require('express');
const router = express.Router();
const CardFid = require('../controller/cardFid');
//add card
router.post('/', (req, res) => {
    CardFid.Addcard(req, res);
});
//get card by code
router.get('/:CodCard', (req, res) => {
    CardFid.getCard(req, res);
});
//add pionts to card
router.put('/addpoints/:id', (req, res) => {
    CardFid.addpoint(req, res);
});
//delete points from card
router.put('/delpoints/:id', (req, res) => {
    CardFid.delpoint(req, res);
});
module.exports = router;