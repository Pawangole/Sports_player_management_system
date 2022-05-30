var express = require('express');
var router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId
const { admin } = require('../models/admin');

// ==========================SPORT================================
// get for sport
router.get('/',(req,res)=>{
    admin.find((err,doc)=>{
        if(!err){console.error(res.send(doc))}
        else{console.log("error in get method")}
    })
})

router.post('/',(req,res)=>{
    var adm= new admin({
        userName:req.body.userName,
        password:req.body.password
    })
    adm.save((err,doc)=>{
        if(!err){console.error(res.send(doc))}
        else{console.log("error in post method")}
    })
})

// Update for sport
router.put('/:id',(req,res)=>{
    var adm={
        userName:req.body.userName,
        password:req.body.password
    }
    if(ObjectId.isValid(req.params.id)){
        admin.findByIdAndUpdate(req.params.id,{$set:adm},{new:true},(err,doc)=>{
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

router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
     admin.findByIdAndRemove(req.params.id,(err,doc)=>{
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


module.exports = router;
