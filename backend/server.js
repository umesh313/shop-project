const http=require("http");
const app=require("./app")
const port=3000;
app.set("port",port)
const Server=http.createServer(app)

Server.listen(process.env.PORT || 8080);