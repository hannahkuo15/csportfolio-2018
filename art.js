/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
 
var points = [];

background (0, 0, 0);

Point = function(x, y){
    this.size = 30;
    this.c1x = x; // circle 1 position
    this.c1y = y; 
    this.c2x = x; // circle 2 position
    this.c2y = y;
    this.c3x = x; // circle 3 position
    this.c3y = y;
    this.c4x = x; // circle 4 position
    this.c4y = y;  
    this.c5x = x; // circle 5 position
    this.c5y = y;
    this.c6x = x; // circle 6 position
    this.c6y = y;
    this.c7x = x; // circle 7 position
    this.c7y = y;
    this.c8x = x; // circle 8 position
    this.c8y = y;
    
    this.draw = function(){
    //circle pattern
    fill(300, 300, 0 );
    strokeWeight(3);
    stroke(300, 300, 0);
    ellipse(this.c1x, this.c1y, this.size, this.size); // lower right
    ellipse(this.c2x, this.c2y, this.size, this.size); // lower left
    ellipse(this.c3x, this.c3y, this.size, this.size); // upper right
    ellipse(this.c4x, this.c4y, this.size, this.size); // upper left
    ellipse(this.c5x, this.c5y, this.size, this.size); // up
    ellipse(this.c6x, this.c6y, this.size, this.size); // middle left
    ellipse(this.c7x, this.c7y, this.size, this.size); // down
    ellipse(this.c8x, this.c8y, this.size, this.size); // middle right
   
    };
    
    this.change = function(){
    // growth values - diamond shape
    this.size--;
    this.c1x += 3;
    this.c1y += 3;
    this.c2x -= 3;
    this.c2y += 3;
    this.c3x += 3;
    this.c3y -= 3;
    this.c4x -= 3;
    this.c4y -= 3; 
    this.c5y -= 5;
    this.c6x -= 5;
    this.c7y += 5;
    this.c8x += 5;
    
    };
};

    //runs function when mouse is clicked
    //brings points to mouseX and mouseY
    mouseClicked = function(){
        points.push(new Point(mouseX, mouseY))
    };
    
    //yellow circle follows mouse
    mouseMoved = function(){
        fill(300, 300, 0);
        ellipse(mouseX, mouseY, 20, 20);
    };
    
draw = function(){
     background();
     // draws circles
    for(var i = 0; i < points.length; i++){
        points[i].draw();
        points[i].change();
      
      //deletes negative circles from array
       if(points[i].size <= 0){
           points.splice(i, 1);
       }
    }
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);