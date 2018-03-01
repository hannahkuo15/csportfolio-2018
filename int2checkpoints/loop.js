/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(200, 100, 300);

    //original design
    for(var i = 0; i < width; i+=30){
        for(var j = 0; j < width; j+=30){
            var size = random(30);
            fill(random(525), random(525), random(525));
            stroke(random(390), random(390), random(390));
        ellipse(i, j, size, size);

        }
    }
    
draw = function() {
    
    //flashing circles in a row
    for(var i = 0; i < width; i+=30){
        for(var j = 0; j < width; j++){
            var size = random(30);
            fill(random(525), random(525), random(525));
            stroke(random(390), random(390), random(390));
        ellipse(i, j, size, size);
    }

}

    
};
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);