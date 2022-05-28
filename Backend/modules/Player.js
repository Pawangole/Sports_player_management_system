const mongoose=require('mongoose')

 const Player=mongoose.model('Player',{
     playerId:{type:Number},
     playerName:{type:String},
     userName:{type:String},
     password:{type:String},
     phoneNo:{type:Number},
     playerEquipments:{type:String},
     registrationDate:{type:Date},
     sportsPlay:{type:String}
 });
 module.exports={Player};