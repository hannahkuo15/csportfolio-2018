//Creates Variables and saves DOM elements to each
var newBGcolor = document.getElementById("newBGcolor");
var colorChangeButton = document.getElementById("colorChangeButton");

/*  EventListener for button
    Sets the background color to the color user inputs as its value */
colorChangeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = newBGcolor.value;
})