const express= require("express");


const route= express.Router();
var userModel=require("../models/forms-model")
// const multer=require("multer");
// const storage=multer.diskStorage({
//     destination:(reg,file,cb)=>{
//         cb(null,"backend/images");

//     },
//     filename: (reg,file,cb)=>{
//         const name= file.originalname.toLocaleLowerCase().split('').join('-');
//     }
// })

// routes.post("",multer(storage).single("image"),(req,res,next)=>{
    

// })



route.post("",function(req,res,next){


    var userdetails= new userModel({
        
         name: req.body.fname,
         password: req.body.password

    });
    console.log(userdetails);

    userdetails.save(); 
})
module.exports=route;