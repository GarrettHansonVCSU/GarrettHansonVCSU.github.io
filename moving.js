var brush = document.getElementById("c1").getContext("2d");
var rects = [[50, 60, 50, 240], [130, 100, 50, 200], [250, 150, 50, 150 ]];
var speed = 2;
setInterval(drawFrame, 20);

function drawFrame(){
    for(var i = 0; i < rects.length; ++i){
        rects[i][0] -= 2;
        if(rects[i][0]+rects[i][2] <= 0){
            rects[i][0] = 400;
            rects[i][3] = Math.ceil(Math.random()*(280-10)+10);
            rects[i][1] = 300 - rects[i][3]
            rects[i][0] = Math.ceil(Math.random()*(170-150)+ 450);

        }
    }
    drawBackground()
    drawRects();
}
function drawBackground(){
    brush.fillStyle = "#5DADE2";
    brush.fillRect(0, 0, 400, 300);
    brush.fillStyle = "#00FF00";
    brush.fillRect(0, 300, 400, 100)
}


function drawRects(){
for(var i = 0; i < rects.length; ++i){
    brush.fillStyle = "#FF0000"
    brush.fillRect(rects[i][0],
                   rects[i][1],
                   rects[i][2],
                   rects[i][3]);

    }      
}