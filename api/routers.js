const ExpensesController = require('../controller/expenseController');
const express = require('express');
const router = express.Router();


router.get("/getexpenses",ExpensesController.findAll);
router.post("/editexpenses",ExpensesController.create);
router.delete("/deleteexpense/:id",ExpensesController.deleteExpense);
router.put("/editexpenses/:id",ExpensesController.editExpense);
router.get("/findcategory",ExpensesController.findCategory);
router.get("/findone/:id",ExpensesController.findSingle);

module.exports = router
 