let mongoose = require('mongoose');

var equipment = mongoose.model('equipment',{
    equipment_id:{type:Number},
    equipment_name:{type:String},
    equipment_fee:{type:Number}
})

module.exports = {equipment}
