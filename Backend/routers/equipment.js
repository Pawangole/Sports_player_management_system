var express = require('express');
var router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId
const {equipment} = require('../modules/equipment')

// get method in equipment
router.get('/',(req,res)=>{
    equipment.find((err,doc)=>{
        if(err){console.log("Error in equipment for get method")}
        else{console.error(res.send(doc))}
    })
})

// post method in equipment
router.post('/',(req,res)=>{
    var equip = new equipment({
        equipment_id:req.body. equipment_id,
        equipment_name:req.body. equipment_name,
        equipment_fee:req.body.equipment_fee
    })
    equip.save((err,doc)=>{
        if(!err){
            console.error(res.send(doc))
        }else{
            console.log("error in saving the equipment")
        }
    })
})

// update in equipment
router.put('/:id',(req,res)=>{
    var equip={
        equipment_id:req.body.equipment_id,
        equipment_name:req.body.equipment_name,
        equipment_fee:req.body.equipment_fee
    }
    if(ObjectId.isValid(req.params.id)){
        equipment.findByIdAndUpdate(req.params.id,{$set:equip},{new:true},(err,doc)=>{
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


// delete in equipment
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.param.id)){
        equipment.findByIdAndRemove(req.params.id,(err,doc)=>{
            if(!err)
            {
                res.send(doc)
               
            }
            else{
                console.log("error in update the equipment by id"+err)
            }
        });
    }
            else
            {
                return res.status(400).send('No record with given id:${req.params.id}');
            }
});

module.exports = router;
