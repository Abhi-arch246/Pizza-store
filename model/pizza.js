const mongoose=require('mongoose')

const pizzaSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    pizzaorder:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
},{timestamps:true})

const Pizza=mongoose.model("Pizza",pizzaSchema)
module.exports=Pizza