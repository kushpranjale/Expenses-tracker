const Expense = require('../models/expenseSchema');
const HttpStatus = require('http-status-codes');



(module.exports) = {

    findAll(req,res,next) {
     Expense.find({ })
     .then(result => {
      res.json(result)
     })
     .catch(err =>{
         res.status(500).json(err);
     })
    },
create(req,res,next) {
  const url = req.protocol + "://" + req.get("host");
    const schema = new Expense({
      date: req.body.date,
      category: req.body.category,
      type: req.body.type,
      amount: req.body.amount,
  

    });
   
    Expense.create(schema)
    .then(result => res.json({result:result._id ,image: result.imagePath, message:"added successfully"}))
    .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
},

findSingle(req,res,next){
Expense.findOne({_id:req.params.id })
.then(result => {
  if(result){
  res.status(200).json(result)
} else {
  res.status.json({message: "not found!!!"})
}
}).catch(err => {
  res.status(401).json(err)
})
},

deleteExpense(req,res,next){
    Expense.deleteOne({_id: req.params.id} ).then(result =>{
        res.status(200).json(result)
    console.log(result)
    })
    res.status(200).json(
      {
        message: "deleted",

      }
    )
    },
    editExpense(req,res,next) {

      Expense.findOne({_id:req.params.id}).then(edit => {

        edit.date= req.body.date;
        edit.category= req.body.category;
        edit.type= req.body.type;
        edit.amount= req.body.amount;
        edit.save(result=>{
          console.log(edit)
          res.status(200).json({ message:"updated"});
          console.log("inside save "+result)
        }) 
      }).catch(err=> {
        res.status(501).json(err);
        console.log("inside save err "+err)

      })

    },
    findCategory(req,res,next) {
      Expense.find({ }, {category:1 , _id:0})
      .then(result => {
       res.json(result)
      })
      .catch(err =>{
          res.status(500).json(err);
      })
     },
}