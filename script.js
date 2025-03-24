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
//butClickMe is an HTLM element, an object
//getElementByID is a method of a document object
let btnClickMe = document.getElementById("btnClickMe");
let img = document.getElementById("image");

//when the button is clicked, the header changes to red, footer turns blue, and container disappears
btnClickMe.onclick = function ()  //onclick is a property
{
    //window.alert("Hello");
    header.style.color = "red";
    footer.style.color = "blue";
    //container.style.visibility = "hidden";
    img.src = "flower.png";
   
    //assign text to input element

    //assign value to input element to out element; turns the container text into what is input in the username box
    container.innerText = username.value

   // username.value=container.innerText;
   // container.value="some text";  //change the value of input text
}

//handle the move over event the header; when mouse goes over header, it turns red
header.onmouseover = function () 
{
    header.style.color = "red";
}

//handle the mouse out event the header; when the mouse leaves the header, it turns to black
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

/*
5 ways to associate a handle to events

1. inline association 
    EX:  <button id="btnClickMe" onclick = "window.alert('hello')">Click Me</button>

2. associate the onclick to an anonymous function
    EX:  btnClickMe.onclick = function ()
         {
            window.alert("Hello");
         }

3. associate with a non-anonymous (or named) function to onclick
    EX:  function handleClick()
        {
            window.alert('clicked');
        }
        btnClickMe.onclick = handleClick;

4. use the method addEventListener() to associate handle
    EX: document.addEventListener('click', handleClick);
        function handleClick()
        {
          window.alert('clicked');
        }

5. arrow function
    EX: btnClickMe.onclick = ()=>{window.alert('clicked');}
*/


/*
Local vs Global Variables

//declare global variable
let x =5;
const PI = 3.14 //declare a global constant

let emptyString = "";
let specialString = "I'm fine"

btnClickMe.onclick = handleClick;
function handleClick()
{
    let y = 5;  //local variable; cannot be accessed outside on handleClick
    window.alert(x);
}
function handleClick2()
{
    let y = 5;
    window.alert(y);  //error, cant accessed y since it is not a global variable, like how x is
    window.alert(x);  //valid, x is global
}
*/