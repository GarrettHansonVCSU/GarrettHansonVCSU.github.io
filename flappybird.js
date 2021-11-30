var brush = document.getElementById("c1").getContext("2d");
var birdX = 100; //x
var birdY = 100;  //y
var birdSize = 20;
var dy = 0;     // speed along y
var g = 0.1;
var jumpImpact = 5;
var pipeW = 50;
var pipeDx = 1;
var pipes = [[150,100,100],[300,200,60],[450,150,50]]; // x, y, h of the pass
var timer = setInterval(drawFrame, 20);
var score = 0;
document.addEventListener("keydown", onkeydown);

function inIt(){
  pipes = [[150,100,100],[300,200,60],[450,150,50]];
  score = 0;
  dy = 0;
  birdX = 100;
  birdY = 100;
  timer = setInterval(drawFrame, 20);
}
    function isXyInRect(x, y, rectX, rectY, rectW, rectH){
        if(x >= rectX && x <= rectX + rectW && y >= rectY && y <= rectY + rectH){
            return true;
        } else {
            return false;
  }
}
function isDead(){
  for(var i = 0; i < pipes.length; ++i){
    var bird_top_left_x = birdX;
    var bird_top_left_y = birdY;
    var bird_top_right_x = birdX + birdSize;
    var bird_top_right_y = birdY;
    var bird_bottom_left_x = birdX;
    var bird_bottom_left_y = birdY + birdSize; 
    var bird_bottom_right_x = birdX + birdSize;
    var bird_bottom_right_y = birdY + birdSize;
    var upper_pipe_x = pipes[i][0];
    var upper_pipe_y = 0;
    var upper_pipe_h = pipes[i][1];
    var upper_pipe_w = pipeW;
    var lower_pipe_x = upper_pipe_x;
    var lower_pipe_y = upper_pipe_h + pipes[i][2];
    var lower_pipe_h = 400 - lower_pipe_y;
    var lower_pipe_w = pipeW;
    if(isXyInRect(bird_top_left_x,      bird_top_left_y,      upper_pipe_x, upper_pipe_y, upper_pipe_w, upper_pipe_h) ||
       isXyInRect(bird_top_right_x,     bird_top_right_y,     upper_pipe_x, upper_pipe_y, upper_pipe_w, upper_pipe_h) ||
       isXyInRect(bird_bottom_right_x,  bird_bottom_right_y,  lower_pipe_x, lower_pipe_y, lower_pipe_w, lower_pipe_h) ||
       isXyInRect(bird_bottom_left_x,   bird_bottom_left_y,   lower_pipe_x, lower_pipe_y, lower_pipe_w, lower_pipe_h)) {
       return true;
      }
    }
  if(bird_top_left_y <= 0 || bird_bottom_left_y >= 400) {
    return true;
}
return false;
}

function drawPipes(){
  brush.fillStyle = "#00FF00";
  for(var i = 0; i < pipes.length; ++i) {
    //draw the upper part
    //brush.fillRect(pipes[i][0],0,pipeW,pipes[i][2]);
    brush.fillRect(pipes[i][0],0,pipeW,pipes[i][1]);
    //draw the lower part
    var x_lower = pipes[i][0];
    var y_lower = pipes[i][1] + pipes[i][2];
    var h_lower = 400-y_lower;
    brush.fillRect(x_lower,y_lower,pipeW,h_lower);
  }
}

function onkeydown(e){
  if(e.key === " "){
    dy -= jumpImpact;
  }
  if(e.key === "Enter"){
    clearInterval(timer);
    inIt();
  }
}
function updateBird(){
  dy += g;
  birdY += dy;
}

function updatePipes(){
  for(var i = 0; i < pipes.length; ++i){
    pipes[i][0] -= pipeDx;
    if(pipes[i][0] + pipeW < 0){
      pipes[i][0] = 400;
      ++score;
    }
  }
}
function drawScore(){
  brush.font = "20px Arial";
  brush.textBaseline = "top";
  brush.textAlign = "left";
  brush.fillStyle = "#FFFFFF";
  brush.fillText("score " + score, 10, 10);
}
function gameOver(){
  brush.font = "60px Arial";
  brush.textBaseline = "top";
  brush.textAlign = "center";
  brush.fillStyle = "#FF0000";
  brush.fillText("GAME OVER!", 200, 140);
}
function drawFrame(){
  if(isDead()){
    clearInterval(timer);
    gameOver();
    return;
  }
  updateBird();
  updatePipes();
  drawBackground();
  drawPipes()
  drawBird();
  drawScore();
}
function drawBackground(){
  // sky
  brush.fillStyle = "#0000FF";
  brush.fillRect(0, 0, 400, 300);
  // a black line
  brush.fillStyle = "#000000";
  brush.fillRect(0, 300, 400, 10);
  // grass
  brush.fillStyle = "#FFFF00";
  brush.fillRect(0, 300, 400, 100);
}

function drawBird(){
  brush.fillStyle = "#FF0000";
  brush.fillRect(birdX, birdY, birdSize, birdSize);
}

function isXyInRect(x, y, rectX, rectY, rectW, rectH){
    if(x >= rectX && x <= rectX + rectW && y >= rectY && y <= rectY + rectH){
        return true;
    } else {
        return false;
    }
}