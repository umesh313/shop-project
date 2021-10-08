var mongoose=require('mongoose')
//define schema
var Schema=mongoose.Schema;

var gameSchema=new Schema({
    _id:Schema.Types.ObjectId,
    id: Number,
    title: String,
    releaseData: Number
})
var game=mongoose.model("Model",gameSchema,"games");
module.exports=game
