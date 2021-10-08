const express= require('express');
const mongoose= require('mongoose');
const path=require("path");
const app= express()

const gameData=require("./models/games-model.js")
var gameRoute=require("./routes/games")

var formroute=require("./routes/form")

// app.set('views',path.join(__dirname,'/views'))
// app.set('view engine','ejs');

// app.get('/games',(req,res,next)=>{
//     res.render("homepage.ejs",{title:"ALL GAMES"})
// });

// app.get('/games/:title/:id',(req,res,next)=>{
//     mytitle=req.params.title;
//     myId= req.params.id
//     res.render("gametitle",{title: mytitle,id:  myId})
// })


// app.get('/games/:id',(req,res,next)=>{
//     res.send("NFS"+req.params.id)
// })

// app.get("*",(req,res)=>{
//     res.send("NOT FOUND")
// })

const url="mongodb+srv://databaseuser:user123@mycluster.neu7r.mongodb.net/mydata?retryWrites=true&w=majority"

mongoose.connect(url,{useNewUrlParser: true}).then(()=>{
    console.log("Connected to Database")
})
 .catch(()=>{

        console.log("connection failed");
    })


    app.use(express.json());
    app.use(express.urlencoded({extended: false}));  

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
    next();
});

// app.get('/games',(req,res,next)=>{
//     res.json([
//         {message:"successful",name:"my data",id:1},
//         {message:"Successful",name:"my data",id:2},
//         {message:"successful",name:"my data",id:3}
//     ])
// });

// games=[
//     {id:1,name:"NFS","releaseDate":2010},
//     {id:2,name:"GTA VC","releaseDate":2011},
//     {id:3,name:"MK","releaseDate":2012},
//     {id:4,name:"GRID","releaseDate":2013}
//   ]


// app.get('/games',(req,res,next)=>{
//     gameData.find().then(data=>{
//       console.log(data)
//       res.status(200).json(data)
//     })
  
//   });

// app.get("/games/:id",(req,res)=>{
//     const game=games.filter(data=>req.params.id==data.id)
//     res.status(200).json(game)
// })

// app.use("",gameRoute)
app.use("/form",formroute)
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,"angular","index.html"))
  })
module.exports= app;
