const express=require('express');
const fetchuser=require("../middleware/fetchuser");
const router=express.Router();
const Transaction = require('../models/Transaction');


//ROUTE 1:Get all the notes using: GET "/api/transaction/fetchallnotes".  login required
router.get('/fetchalltransaction',fetchuser,async (req,res)=>
{
    try {
           //fetching notes of unique user id i.e A can view only A Notes,B can view only B Notes
    const transactions=await Transaction.find({user:req.user.id})

    res.json(transactions);
        
    } catch (e) {
        console.log(e);
        res.status(500).json("Some error occured");
    }
 
})


//ROUTE 2:adding transaction using: POST "/api/transaction/addtransaction".  login required
router.post('/addtransaction',fetchuser,async (req,res)=>
{
    const{type,amount,tag}=req.body;
    try
    {
//Creating new transaction
    const transaction=new Transaction({
        type,amount,tag,user:req.user.id
    })
 
    const SavedTransaction=await transaction.save()
    res.json(SavedTransaction);
}
    catch(e)
    {
        console.log(e);
            res.status(500).json("Some error occured");
    }
})

//ROUTE 4:Deleting the Transactions using: DELETE "/api/auth/deletetransaction".  login required
router.delete('/deletetransaction/:id',fetchuser,async (req,res)=>
{
    try{

    //find the note to be deleted
    let transaction=await Transaction.findById(req.params.id)
    if(!transaction)
    {
        return   res.status(404).send("Not Found")
    }
    //if id of requested user and already saved user on database is not same then not authorised
    if(transaction.user.toString()!==req.user.id)
    {
        return res.status(401).send("Not Allowed")
    }

    transaction=await Transaction.findByIdAndDelete(req.params.id)
    res.json({"Success":"Note has been deleted",transaction:transaction})
}
catch(e)
{
    console.log(e);
    res.status(500).json("Some error occured");
}
 
}
)














module.exports= router 