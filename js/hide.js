/* save the two nodes into variables */
var button = document.getElementById("hide"),
    target = document.getElementById("target");

/* define what we want to do in a function */
function hide() {
  target.setAttribute("class","hide");
}

/* add the css class when the button is clicked */
button.addEventListener("click", hide, false);

/* You know JavaScript is enabled at this point because none of this would apply otherwise */

/* check if localStorage is supported */
if(typeof window.localStorage !== "undefined") {
  // use localStorage
} else {
  // use normal cookies
}

/* CONSOLE
output a basic message to the console */
console.log("hello there");

/* output a variable in the console */
var msg = "this is from a variable";

console.log(msg);