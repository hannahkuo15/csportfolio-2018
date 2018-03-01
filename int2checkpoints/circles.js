/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0;
var weight = 2;
var size = 0;
var mouseX = 0;
var mouseY = 0;

background(0, 300, 400);

draw = function() {
    
    //Draws Blue Circles 
    mouseDragged = function() {
    strokeWeight(1);
    stroke(100, 10, 300);
    fill(100, 10, 300);
    ellipse(mouseX, mouseY, 15, 15);
    xPos = xPos + 20;
    yPos = yPos + 20;
    

};    
   
    
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
