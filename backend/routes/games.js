const express= require("express")
const route = express.Router()
var gameData=require('../models/games-model')



route.get('/games',(req,res,next)=>{
    gameData.find().then(data=>{
        console.log(data)
        res.status(200).json(data)
    })

});

route.get('/games/:id',(req,res)=>{
    console.log(req.params.id)
    gameData.findById(req.params.id).then(data=>{

        console.log(data)
        res.json(data)
    }).catch
    ((err)=>{console.log(err)})
})

module.exports=route;
