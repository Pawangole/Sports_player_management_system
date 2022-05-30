const mongoose = require('mongoose');

var admin = mongoose.model('admin',{
    userName:{type:String},
    password:{type:String}
});

module.exports = {admin};
