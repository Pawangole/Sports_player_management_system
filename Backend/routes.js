var express = require('express');
var router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId
const { sport } = require('../model/sport');
// const { equipment } = require('../model/sport')

// ==========================SPORT================================
// get for sport
router.get('/',(req,res)=>{
    sport.find((err,doc)=>{
        if(!err){console.error(res.send(doc))}
        else{console.log("error in get method")}
    })
})

// get a particular id in sport
router.get('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
 sport.findById(req.params.id,(err,doc)=>{
           if(err){
               console.log('Error in get sport by id'+err)
          }
           else{
               res.send(doc);
           }
        });
       }else{
           return res.status(400).send('No record found with id'+req.params.id)
       }
   });
 
//add in sport 
router.post('/',(req,res)=>{
    var spr= new sport({
        sport_id:req.body.sport_id,
        sport_name:req.body.sport_name,
        sport_fee:req.body.sport_fee
    })
    spr.save((err,doc)=>{
        if(!err){console.error(res.send(doc))}
        else{console.log("error in post method")}
    })
})

// Update for sport
router.put('/:id',(req,res)=>{
    var spr={
        sport_id:req.body.sport_id,
        sport_name:req.body.sport_name,
        sport_fee:req.body.sport_fee
    }
    if(ObjectId.isValid(req.params.id)){
        sport.findByIdAndUpdate(req.params.id,{$set:spr},{new:true},(err,doc)=>{
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

// delete for sport
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.param.id)){
        sport.findByIdAndRemove(req.params.id,(err,doc)=>{
            if(!err)
            {
                res.send(doc)
               
            }
            else{
                console.log("error in update sprots by id"+err)
            }
        });
    }
            else
            {
                return res.status(400).send('No record with given id:${req.params.id}');
            }
});


// ===========================EQUIPMENT=============================
// router.get('/equipment',(err,doc)=>{
//     sport.find((err,doc)=>{
//         if(!err){console.error(res.send(doc))}
//         else{console.log("error in get method")}
//     })
// })

// // add in equipment method
// router.post('/',(req,res)=>{
//     var spr= new sport({
//         equipment_id:req.body.equipment_id,
//         equipment_name:req.body.equipment_name
//     })
//     spr.save((err,doc)=>{
//         if(!err){console.error(res.send(doc))}
//         else{console.log("error in post method")}
//     })
// })


module.exports = router;