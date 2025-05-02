const mongoose = require('mongoose') ; 

const productSchema = new mongoose.Schema({
    name:String , 
    image:String , 
    discribtion:String
    
}) ; 
module.exports= mongoose.model('Product' , productSchema) ;