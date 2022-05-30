const mongoose = require('mongoose');
 
mongoose.connect("mongodb://localhost:27017/sportapp",(err)=>{
    if(!err){
        console.log("connected")
    }else{
        console.log("error in connecting db")
    }
});

module.exports = mongoose;

