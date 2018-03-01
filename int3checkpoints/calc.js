var num1 = document.getElementById("num1");
var operator = document.getElementById("operator");
var num2 = document.getElementById("num2");
var button = document.getElementById("calculate");
var display = document.getElementById("display");

//tells button to listen for the 'click' event, and when it does, calculate the inputs based on the number values and operation used.
button.addEventListener("click", function(){
    var number1 = +num1.value;
    var number2 = +num2.value;
    var op = operator.value;

//gives the calculator the ability to calculate and display the answer in the div below
//also tells calculator to display the right information because it gives very specific instructions to respond to
    if (op === "+") {
        display.innerHTML = number1 + number2;
    }
    else if (op === "-") {
        display.innerHTML = number1 - number2;
    }
    else if (op === "*") {
        display.innerHTML = number1 * number2;
    }
    else if (op === "/") {
        display.innerHTML = number1 / number2;
    }
});