
const express=require('express');
const ObjectId = require('mongoose').Types.ObjectId;
const router=express.Router();
const {sports}=require('../models/sports');

router.get('/:id',(req,res)=>{
    
    if(ObjectId.isValid(req.params.id)){
     sports.findById(req.params.id,(err,doc)=>{
        if(err){
            console.log('Error in get employee by id'+err)
       }
        else{
            res.send(doc);
        }
     });
    }else{
        return res.status(400).send('No record found with id'+req.params.id)
    }
});


// Get sports
router.get('/',(req,res)=>{
    sports.find((err,doc)=>{
       if(err){
            console.log('Error i Post Data'+err)
        }
       else{
            res.send(doc);
        }
    });

});

// Add Sports

router.post('/',(req,res)=>{
    let sport=new sports({
        id:req.body.id,
        name:req.body.name,
        fee:req.body.fee
    });
    sport.save((err,doc)=>{
        if(err){
            console.log('Error i Post Data'+err)
        }
        else{
            res.send(doc)
        }
    });
});
  

// Update Sports
router.put('/:id',(req,res)=>{
    var sport={
        id:req.body.id,
        name:req.body.name,
        fee:req.body.fee
    }
    if(ObjectId.isValid(req.params.id)){
     sports.findByIdAndUpdate(req.params.id,{$set:sport},{new:true},(err,doc)=>{
        if(err){
            console.log('Error in get employee by id'+err)
       }
        else{
            res.send(doc);
        }
     });
    }else{
        return res.status(400).send('No record found with id'+req.params.id)
    }
});

// Delete Sports
router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
     sports.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(err){
            console.log('Error in delete employee by id'+err)
       }
        else{
            res.send(doc);
        }
     });
    }else{
        return res.status(400).send('No record found with id'+req.params.id)
    }
});
module.exports=router;
