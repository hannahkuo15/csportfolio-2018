/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(100, 200, 300);
drawMouse = function(x, y){
    //left ear
    fill(random(255), random(255), random(255));
    strokeWeight(3);
    stroke(random(255), random(255), random(255));
    ellipse(x - 50, y - 50, 50, 50); // left ear
    ellipse(x + 50, y - 50, 50, 50); // right ear
    ellipse(x, y, 100, 100); //face
    
    //left eye
    fill(0, 0, 0);
    strokeWeight(3);
    stroke(0, 0, 0);
    ellipse(x - 20, y - 3, 15, 15);
    
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(255, 255, 255);
    ellipse(x - 20, y - 5, 5, 5);
    
    //right eye
    fill(0, 0, 0);
    strokeWeight(3);
    stroke(0, 0, 0);
    ellipse(x + 20, y - 3, 15, 15);
    
    fill(255, 255, 255);
    strokeWeight(3);
    stroke(255, 255, 255);
    ellipse(x + 20, y - 5, 5, 5);
    
    //nose
    fill(0, 0, 0);
    strokeWeight(3);
    stroke(0, 0, 0);
    ellipse(x, y + 20, 30, 20);
    
};

mouseClicked = function(){
    drawMouse(mouseX, mouseY);
    
}

draw = function(){
    
};




// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);