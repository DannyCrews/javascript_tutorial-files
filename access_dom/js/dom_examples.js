/* JavaScript used to access an element by it's id */
document.getElementById("header");
document.getElementById("homelink");
/* Note that getElementById can only return a single element */

/* JavaScript example of getElemenetsByTagName */
document.getElementsByTagName("p");
/* returns a DOM object called a NodeList */

/* Returning the total number of elements in our NodeList */
document.getElementsByTagName("p").length;
// will return 3

// checking the length before executing script
if(document.getElementsByTagName("p").length > 0) {
  // it returns "3", and 3 is greater than "0", so we're good to go.
}
