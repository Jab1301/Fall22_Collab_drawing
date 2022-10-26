let socket = io();

socket.on("connect", () => {
    console.log("connected to the server via sockets")
})

function setup() {
    createCanvas(400, 400);
    background(220,123,43);
    fill(124,233,21);
    noStroke();
  }
  
  function mouseDragged() {
   
    circle(mouseX, mouseY, 50);
    let data = {
        x : mouseX,
        y : mouseY
    }
    socket.emit("data", dataObj);
  
}


//on getting data from server, draw the painting.
function drawPainting(dataObj) {
    circle(dataObj.X, dataObj.y, 20);
}