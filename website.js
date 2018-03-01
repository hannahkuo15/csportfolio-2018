//creates variables that bring all the HTML coding of an element into a specific variable 
var scoresButton = document.getElementById("scoresButton");   //this is the variable the SeeScores button is held in.
var ans1 = document.getElementById("ans1");     //the ans variables are the divs that will display whether or not the answer the user selected was correct    
var ans2 = document.getElementById("ans2");     
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var ans5 = document.getElementById("ans5");
var ans6 = document.getElementById("ans6");
var ans7 = document.getElementById("ans7");
var ans8 = document.getElementById("ans8");
var ans9 = document.getElementById("ans9");
var ans10 = document.getElementById("ans10");
var q1 = document.getElementsByName("q1");      //q variables are the question names, so I will be able to directly work with the question and its answers.
var q2 = document.getElementsByName("q2");
var q3 = document.getElementsByName("q3");
var q4 = document.getElementsByName("q4");
var q5 = document.getElementsByName("q5");
var q6 = document.getElementsByName("q6");
var q7 = document.getElementsByName("q7");
var q8 = document.getElementsByName("q8");
var q9 = document.getElementsByName("q9");
var q10 = document.getElementsByName("q10");


// tells the enter button to listen for the mouse to click, then runs a function
scoresButton.addEventListener("click", function(){

//if else statements tells the page whether or not to display 'correct' or 'try again' depending on the answer the user gives.
//points to a specific question to mark as 'correct'. anything else will be marked as 'try again'.
    if(q1[0].checked){
        ans1.innerHTML = "Correct!";
    }
    else {
        ans1.innerHTML =  "Try again";
    }
    if(q2[1].checked){
        ans2.innerHTML = "Correct!";
    }
    else{
        ans2.innerHTML = "Try again";
    }
    if(q3[1].checked){
        ans3.innerHTML =  "Correct!";
    }
    else {
        ans3.innerHTML = "Try again";
    }
    if(q4[3].checked){
        ans4.innerHTML = "Correct!";
    }
    else {
        ans4.innerHTML = "Try again";
    }
    if(q5[0].checked){
        ans5.innerHTML = "Correct!";
    }
    else {
        ans5.innerHTML = "Try again";
    }
    if(q6[1].checked){
        ans6.innerHTML = "Correct!";
    }
    else {
        ans6.innerHTML = "Try again";
    }
    if(q7[2].checked){
        ans7.innerHTML = "Correct!";
    }
    else {
        ans7.innerHTML = "Try again";
    }
    if(q8[3].checked){
        ans8.innerHTML = "Correct!";
    }
    else {
        ans8.innerHTML = "Try again";
    }
    if(q9[2].checked){
        ans9.innerHTML = "Correct!";
    }
    else {
        ans9.innerHTML = "Try again";
    }
    if(q10[1].checked){
        ans10.innerHTML = "Correct!";
    }
    else {
        ans10.innerHTML = "Try again";
    }
    
});