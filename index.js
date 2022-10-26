        //Create the Express App
let express = require("express");
let app = express();
app.use("/", express.static ("public"));

//create the http server 
let http = require("http");
let server = http.createServer(app)

//setup socket connections
let io = require("socket.io");
io = new io.Server(server)

//listen for connections
io.sockets.on("connection", (socket)=> {
    console.log("We have a new client", socket.id);

//".on" getting "data", "emit" to all C
socket.on("data", (data) => {
    console.log("data");
    io.sockets.emit("dataFromServer", data);
})


    //listen for when socket disconnects
socket.on("disconnect", () => {
    console.log("Client disconnected : ", socket.id)
    })
})



//run the app on port 8000
server.listen("8000", () => {
    console.log("server on port 8000");
})