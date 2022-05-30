const mongoose = require('mongoose');

var sport = mongoose.model('sport',{
    sport_id:{type:Number},
    sport_name:{type:String},
    sport_fee:{type:Number} 
});

module.exports = {sport};
