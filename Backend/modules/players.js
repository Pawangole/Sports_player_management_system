const mongoose = require('mongoose');

const player = mongoose.model('players', {
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
