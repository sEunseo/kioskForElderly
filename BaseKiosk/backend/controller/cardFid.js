const cardModel = require('../model/CardFid.model');
const crypto = require('crypto');
//add fidel card 
function Addcard(req, res) {
    let cardCode = crypto.randomBytes(4).toString('hex')
    let card = {
        CodeCard: cardCode,
        points: 0,
    };
    cardModel.create(card)
        .then(() => {
            return res.status(200).json({
                "message": `card added with code: ${cardCode}`
            });
        }).catch(err => {
            return res.status(500).json({
                "message": "Is not added",
                "err": err
            });
        })
}
// get card by code
async function getCard(req, res) {
    let card = await cardModel.findOne({
        CodeCard: `${req.params.CodCard}`
    })
    console.log("here we are ")
    if (card == null) {
        console.log("here we are ")
        let cardCode = crypto.randomBytes(4).toString('hex')
        let newcard = {
            CodeCard: cardCode,
            points: 0,
        };
        cardModel.create(newcard)
            .then(() => {
                return res.status(200).json({
                    "message": `card added with code: ${cardCode}`,
                    "cardcode": cardCode
                });
            }).catch(err => {
                return res.status(500).json({
                    "message": "Is not added",
                    "err": err
                });
            })
    } else {
        res.json({
            "cardcode": card.CodeCard
        })

    }
}
// add point after taking a command 
function addpoint(req, res) {
    let newpoint = req.body.points + req.body.added;
    //to do : add conndition to check points 
    console.log(newpoint);
    cardModel.updateOne({
            CodeCard: req.params.id
        }, {
            points: newpoint
        })
        .then(() => res.status(201).json("card points successfully update"))
        .catch((err) => res.status(400).json("Error :" + err));
}
// delete point after using them 
function delpoint(req, res) {
    let newpoint = req.body.points - req.body.deleted;
    if (newpoint < 0) {
        res.status(400).json("Error :" + "you dont have enough pionts")
    } else {
        cardModel.updateOne({
                CodeCard: req.params.id
            }, {
                points: newpoint
            })
            .then(() => res.status(201).json("card points successfully update"))
            .catch((err) => res.status(400).json("Error :" + err));
    }
}

module.exports = {
    Addcard,
    getCard,
    addpoint,
    delpoint
};