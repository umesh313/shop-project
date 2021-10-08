var mongoose= require('mongoose');


var Schema= mongoose.Schema;

var formSchema= new Schema({

 
  
    name: String,
    password: String,
   
});

var form= mongoose.model("Form", formSchema);

module.exports=form;