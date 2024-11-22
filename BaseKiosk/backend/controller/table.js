const tableModel = require('../model/table.model');
//get free table
function getfreetable(req, res) {
    tableModel.tableModel.findOne({
           isBusy: 'false'
       }).then((card) => {
           res.json(card)
       })
}
module.exports = {
    getfreetable
}