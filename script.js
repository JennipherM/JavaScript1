//display alert "good afternoon"
window.alert("Good afternoon")

//declare the variable to hole the div element
let container = document.getElementById("container");

//getElementID is the method to locate the element by the ID
//container is an HTML element, it is in the div 

//set the content of element 
container.innerHTML = ("<p>This is the container place</p>");

//change color style to red
container.style.color = "red";

document.write("<p>This is a new paragraph</p>");

//declare a variable to hold header
let header = document.getElementsByTagName("h1")[0];
let footer = document.getElementsByTagName("h1")[1];

//declare a new variabl eto hole button element
let btnClickMe = document.getElementById("btnClickMe");

btnClickMe.onclick = function () 
{
    //window.alert("Hello");
    header.style.color = "red";
    footer.style.color = "blue";
    container.style.visibility = "hidden";
}

//handdel the move over event the header
header.onmouseover = function () 
{
    header.style.color = "red";
}

//handle the mouse oout event the header
header.onmouseout = function () 
{
    header.style.color = "black";
}

//declare a variable to work with the text input username
let username = document.getElementById("username");

username.onchange = function()
{
    container.innerHTML = username.value;
}