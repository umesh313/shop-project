var fs=require('fs')
var readerStream = fs.createReadStream("data.txt")
readerStream.setEncoding("UTF8");
readerStream.on("data",mydata=>{
    console.log("------")
    console.log(mydata)
})
readerStream.on("end",()=>{
    console.log("the end")
})

var WriterStream = fs.createWriteStream("Output.txt");
data="this is nw line";
WriterStream.write(data,"UTF8");
WriterStream.end()


WriterStream.on("finish",()=>{
    console.log("writing finish")
})