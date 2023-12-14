const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const transactionSchema = new Schema({
    //basically foriegn
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"

    },
   type:{
    type:String,
    required:true
   },
   amount:{
    type:String,
    required:true,
   },
   tag:{
    type:String ,
    default:"General"
   },
   date:{
    type:Date,
    default:Date.now
   }
   
    
  });


  module.exports=mongoose.model('transactions',transactionSchema);