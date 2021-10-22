var brush = document.getElementById("c1").getContext("2d");
var y = 100;
var x = 100;
var size = 20;
var speed = 2;
var isLeft = false;
var isUp = false;
var isRight = false;
var isDown = false;
drawBackground();
drawPlayer();
document.addEventListener("keydown", onkeydown);
document.addEventListener("keyup", onkeyup);
setInterval(drawFrame, 20);

function onkeyup(e){
        if(e.key === 'ArrowRight') {
            isRight = false; 
        }
        if(e.key === 'ArrowLeft') {
            isLeft = false;
        }
        if(e.key === 'ArrowUp') {
            isUp = false;
        }
        if(e.key === 'ArrowDown') {
            isDown = false;  
        }
}
function onkeydown(e){
        if(e.key === 'ArrowRight') {
            isRight = true;
        }
        if(e.key === 'ArrowLeft') {
            isLeft = true;
        }
        if(e.key === 'ArrowUp') {
            isUp = true;
        }
        if(e.key === 'ArrowDown') {
            isDown = true;
        }
}
function update(){
        if(isRight) {
        if(x < 400 - size)
        x += speed;
        else
        x = 400 - size;
    }
        if(isLeft) {
        if(x > 0)
        x -= speed;
        else
        x = 0;
    }
        if(isUp) {
        if(y > 0)
        y -= speed;
        else
        y = 0

    }
        if(isDown){
        if(y < 400 - size)
        y += speed;
        else
        y = 400 - size

    }
 }

function drawFrame(){
    update();
    drawBackground();
    drawPlayer();
}
function drawBackground(){
brush.fillStyle = "#BBBBBB"; // 0-255
brush.fillRect(0, 0, 400, 400);
}
function drawPlayer(){
brush.fillStyle = "#FF0000"; //red
brush.fillRect(x, y, 20, 20);
}    