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

/* Using getElementsByTagName to target a single node */
// the first paragraph using the item method
document.getElementsByTagName("p").item(0);

// the first paragraph with array syntax
document.getElementsByTagName("p")[0];

// the second paragraph with the item method
document.getElementsByTagName("p").item(1);

// the second paragraph with array syntax
document.getElementsByTagName("p")[1];

// returns all elements with a class of dropcap
document.getElementsByClassName("dropcap");

// returns all elements with BOTH "dropcap" and "huge" classes
document.getElementsByClassName("dropcap huge");

// returns all elements classed with "huge" that are inside elements ID'd with "e"
document.getElementById("e").getElementsByClassName("huge");

/* Using querySelectors */
// get the header ID element
document.querySelector("#header");

// get the first element with a dropcap class
document.querySelector(".dropcap");

// get all the elements with a dropcap class - returns a NodeList
document.querySelectorAll(".dropcap");

// get all elements with a class of "dropcap" OR "huge"
document.querySelectorAll(".dropcap, .huge");

// get all paragraphs that have a class
document.querySelectorAll("p[class]");

/* The attribute node is within the element node. It is NOT considered to be a child of that node */
/* attribute methods are:
    getAttribute()
    setAttribute()
    removeAttribute()
    hasAttribute()
*/

/* JavaScript used to get the class value of our image */
// first we target the element and check if it has a class on it
if(document.getElementById("plc").hasAttribute("class")) {

  // after we know a class exists, we can get the value
  document.getElementById("plc").getAttribute("class");
  // this would return the value of "show", which is a class on our image
}

/* JavaScript used to set the class attribute of our image */
// replace the current class with a value of "hidden"
document.getElementById("plc").setAttribute("class", "hidden");
// add a new attribute to the image
document.getElementById("plc").setAttribute("title", "we moved this element offscreen");

/* JavaScript used to remove the class value of our image */
// first we target the element and check to see if it has a class on it
if(document.getElementById("plc").hasAttribute("class")) {

  // after we know a class exists, we can then remove it
  document.getElementById("plc").removeAttribute("class");
}

/* Using innerHTML */
// targeting the text node
document.getElementById("target-area").innerHTML;

// changing the content in the text node - you can jump straight to this.
document.getElementById("target-area").innerHTML = "<p>hello world</p>";

/* moving around the DOM using:
  parentNode
  previousSibling
  nextSibling
  firstChild
  lastChild
*/

/* Targeting a parentNode */
// target the "about" link and apply a class to its parent list item
document.getElementById("about").parentNode.setAttribute("class", "active");

/* adding a class to previous and nextSibling nodes */
// get "about" parent, then its previous sibling and apply a class
document.getElementById("about").parentNode.previousSibling.setAttribute("class", "previous");

// get "about" parent, then its next sibling and apply a class
document.getElementById("about").parentNode.nextSibling.setAttribute("class", "next");

/* Adding a class to the first and last items in our Nav */
// travel to the first node and add the class
document.getElementById("nav").firstChild.setAttribute("class", "first");

// travel to the last node and add a class
document.getElementById("nav").lastChild.setAttribute("class", "last");
















