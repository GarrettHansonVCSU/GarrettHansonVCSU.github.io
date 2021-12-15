var brush = document.getElementById("c1").getContext("2d");
var x = 150;
var y = 380;
var x2 = 190;
var y2 = 360;
var size = 10;
var speed = 10;
var isLeft = false;
var isUp = false;
var isRight = false;
var isDown = false;
var score = 0
var timer = setInterval(drawFrame, 50) 

document.addEventListener("keydown", onkeydown);
document.addEventListener("keyup", onkeyup);
drawPaddle();

function gameRestart(){
    x = 150;
    y = 380;
x2 = 190;
y2 = 360;
score = 0
timer = setInterval(drawFrame, 50) 
states = [[195, 370, - 8, -1]]  
}



function onkeyup(e){
    if(e.key === "ArrowRight"){
        isRight = false;

    }
    if(e.key === "ArrowLeft"){
        isLeft = false;
    }
    if(e.key === "Enter"){
        clearInterval(timer);
        gameRestart();
    } 
}

function onkeydown(e){
     if(e.key === "ArrowRight"){
        isRight = true;

    }
    if(e.key === "ArrowLeft"){
        isLeft = true;
    }
    if(e.key === "Enter"){
        clearInterval(timer);
        gameRestart();
    }
}

function update(e){
    if(isRight){
        if(x < 400 - 100)
            x += speed;
        else
            x = 400 - 100;
    }
    if(isLeft){
        if(x > 0)
            x -= speed;
        else
        x = 0;
    }
}

function drawFrame(){
    update();
    drawBalls(x2,y2);
    drawBackground();
    drawPaddle();
    drawFrames();
    drawBoxes();
    drawScore();
}

function drawBackground(){
    brush.fillStyle = "#000000";
    brush.fillRect(0, 0, 400, 400);
}

function drawBoxes(){
brush.fillStyle = "#ffffff"
brush.fillRect (20, 20, 50, 10)
}

function drawPaddle(){
    brush.fillStyle = "#ffffff";
    brush.fillRect(x, y, 100, 10);
}

function drawScore(){
    brush.font = "20px Arial";
    brush.textBaseline = "top";
    brush.textAlign = "right";
    brush.fillStyle = "#ffffff";
    brush.fillText("score: " + score, 390, 380);
}

var states = [[195, 370, 0, 0]]

function drawFrames(){
    for (var i = 0; i < states.length; ++i){
    states[i][0] += states[i][2];
    states[i][1] += states[i][3];
     if(states[i][0] <= 0 ||(states[i][0] >= 400 - size) ){
        states[i][2] = -states[i][2]
     }
     if(states[i][1] <= 0 || states[i][1] >= 400 - size ){
        states[i][3] = -states[i][3]
     }
    }
drawSquares();
} 

function drawSquares(){
    for(var i = 0; i < states.length; ++i){
        drawBalls(states[i][0], states[i][1]);
    }
    }  

function drawBalls(x2, y2){
    brush.fillStyle = "#ffFFff";
    brush.fillRect(x2, y2, size, size);
    }

function hitFloor(){
    
    
    
}