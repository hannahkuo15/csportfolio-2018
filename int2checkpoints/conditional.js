/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


        draw = function() {

            background(200, 100, 300);

            //draws a changing rectangle based on y position
            if (mouseY < 200) {


                if (mouseX > 200) {
                    rect(mouseX, mouseY, 100, 30);
                    fill(100, 0, 200);
                    strokeWeight(3);
                    stroke(200, 0, 100);
                }
                else {
                    rect(mouseX, mouseY, 100, 30);
                    fill(200, 0, 246);
                    strokeWeight(3);
                    stroke(246, 0, 200);
                }
            }
            else {
                
                ellipse(mouseX, mouseY, 40, 40);

                //changes colors of circle based on x position
                if (mouseX > 200) {
                    ellipse(mouseX, mouseY, 50, 50);
                    fill(0, 210, 247);
                    strokeWeight(4);
                    stroke(300, 100, 247);
                }
                else {
                    ellipse(mouseX, mouseY, 50,50);
                    fill(0, 10, 20);
                    strokeWeight(2);
                    stroke(0, 210, 247);
                }
            }
                
            //adds another shape inside
            if (mouseY > 200) {
                if(mouseX > 0) { 
                    ellipse(mouseX, mouseY, 30, 30);
                }
                else {
                    ellipse(mouseX, mouseY, 30, 30);
                }
            }
            else {
                if (mouseY > 0) {
                    rect(mouseX, mouseY, 50, 15);
                    fill(100, 0, 0);
                }
                else{
                    rect(mouseX, mouseY, 50, 15);
                    fill(0, 0, 300);
                }
            }
        };
        


        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);