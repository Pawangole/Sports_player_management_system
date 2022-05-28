const express=require('express');
const router=express.Router();
const {Player}=require('../models/Player');

router.get('/',(req,res)=>{
    Player.find((err,docs)=>{
        if(err){
            console.log('Error i Post Data'+err)
        }
        else{
            res.send(docs);
        }
    });

});


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
    play.save((err,docs)=>{
        if(err){
            console.log('Error i Post Data'+err)
        }
        else{
            res.send(docs)
        }
    });
});
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.param.id))
    return res.status(400).send('No record with given id:${req.params.id}');

var play={
    playerId:req.body.playerId,
 playerName:req.body.playerName,
 userName:req.body.userName,
 password:req.body.password,
 phoneNo:req.body.phoneNo,
 playerEquipments:req.body.playerEquipments,
 registrationDate:req.body.registrationDate,
 sportsPlay:req.body.sportsPlay
};
Player.findByIdAndUpdate(req.params.id,{$set:play},{new:true},(err,doc)=>{
    if(!err)
    {
        res.send(doc)
       
    }
    else
    {
        console.log('Error i Post Data'+err)
    }
});
});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.param.id))
    return res.status(400).send('No record with given id:${req.params.id}');

    Player.findByIdAndRemove(req.params.id,{$set:play},{new:true},(err,doc)=>{
        if(!err)
        {
            res.send(doc)
           
        }
        else
        {
            console.log('Error i Post Data'+err)
        }
    });

});
module.exports=router;
