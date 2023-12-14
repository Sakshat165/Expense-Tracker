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


//ROUTE 2:adding notes using: POST "/api/transaction/addtransaction".  login required
router.post('/addtransaction',fetchuser,async (req,res)=>
{
    const{type,amount,tag}=req.body;
    try
    {
//Creating new note
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












module.exports= router 