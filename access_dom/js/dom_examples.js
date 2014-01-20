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