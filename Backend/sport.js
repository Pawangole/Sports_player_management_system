const mongoose = require('mongoose');

var sport = mongoose.model('sport',{
    sport_id:{type:Number},
    sport_name:{type:String},
    sport_fee:{type:Number} 
})

// var equipment = mongoose.model('equipment',{
//     equipment_id:{type:Number}
// })

module.exports = {sport}
// module.exports = {equipment}