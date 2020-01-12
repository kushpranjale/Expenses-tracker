const mongoose = require('mongoose');
const ExpenseSchema = mongoose.Schema({
date: {
    type: String,
    required: true,
},
category: {
    type: String,
    required: true,
},
type: {
    type: String,
    required: true,
},

amount: {
    type: String,
    required: true,
},

});
module.exports = mongoose.model('Expense',ExpenseSchema);