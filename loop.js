var brush = document.getElementById("c1").getContext("2d");
var size = 20;
var gap = 10;
var d = size + gap
brush.fillStyle = "#000000";
brush.fillRect(0, 0, 400, 400);

var j = 0;
while(j < 13){

    var i = 0
    while(i < 13){
        drawSquare(gap + i*d, gap + j*d);
        ++i;  
    }
    
    ++j;
}

function drawSquare(x, y){
    brush.fillStyle = "#FF0000";
    brush.fillRect(x, y, size, size);
}
brush = document.getElementById("c2").getContext("2d");
size = 20;
gap = 10;
d = size + gap
brush.fillStyle = "#000000";
brush.fillRect(0, 0, 400, 400);

for(var i = 0; i < 13; ++i) {
    drawSquare(gap + i*d, gap + i*d);
}

function drawSquare(x, y){
    brush.fillStyle = "#FF0000";
    brush.fillRect(x, y, size, size);
}