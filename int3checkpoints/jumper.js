//stores the information of 'jumper' into a variable so it would be easier to work with and change.
var jumper = document.getElementById("jumper");
    jumper.style.position = "absolute";
    
//tells code to listen for event 'mousemove'. When it happens, the different CSS styles will make the button jump around the screen, away from the mouse.
jumper.addEventListener("mousemove", function(){
        jumper.style.top = Math.random() * 300+ "px";
        jumper.style.left = Math.random() * 300 + "px";
        
});