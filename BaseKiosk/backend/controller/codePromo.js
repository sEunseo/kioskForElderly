const codePromoModel = require('../model/CodePromo.model')

//get code promo by code
function getCodePromo(req, res) {
    console.log(req.params.code);
    codePromoModel.findOne({
        Code: `${req.params.code}`
    }).then((promoCode) => {
        res.json(promoCode)
    })
}
module.exports = {
    getCodePromo
};