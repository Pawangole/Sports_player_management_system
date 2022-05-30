
const express=require('express');
const ObjectId= require('mongoose').Types.ObjectId;

const router=express.Router();
const {Player}=require('../modules/player');
 
// get Single player by Id

router.get('/:playerId',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
     Player.findById(req.params.id,(err,doc)=>{
        if(err){
            console.log('Error in get player by id'+err)
       }
        else{
            res.send(doc);
        }
     });
    }else{
        return res.status(400).send('No record found with id'+req.params.id)
    }
});

// Get Players
router.get('/',(req,res)=>{
    Player.find((err,doc)=>{
       if(err){
            console.log('Error i Post Data'+err)
        }
       else{
            res.send(doc);
        }
    });

});

// Add Players

router.post('/',(req,res)=>{
    let play=new Player({
        playerId:req.body.playerId,
     playerName:req.body.playerName,
     userName:req.body.userName,
     password:req.body.password,
     phoneNo:req.body.phoneNo,
     playerEquipments:req.body.playerEquipments,
     registrationDate:req.body.registrationDate,
     sportsPlay:req.body.sportsPlay
    });
    play.save((err,doc)=>{
        if(err){
            console.log('Error i Post Data'+err)
        }
        else{
            res.send(doc)
        }
    });
});
  

// Update Player
router.put('/:id',(req,res)=>{
    var play={
        playerId:req.body.playerId,
     playerName:req.body.playerName,
     userName:req.body.userName,
     password:req.body.password,
     phoneNo:req.body.phoneNo,
     playerEquipments:req.body.playerEquipments,
     registrationDate:req.body.registrationDate,
     sportsPlay:req.body.sportsPlay
    }
    if(ObjectId.isValid(req.params.id)){
     Player.findByIdAndUpdate(req.params.id,{$set:play},{new:true},(err,doc)=>{
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

// Delete Player
router.delete('/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
     Player.findByIdAndRemove(req.params.id,(err,doc)=>{
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
