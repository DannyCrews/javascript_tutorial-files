/* push - Adding items to an array */
/* declare breakfast normally */
var breakfast = ["Egg, Sausage and Cheese", "Egg Whites on Flatbread", "Egg and Cheese"];
/* add a jalapeno bagel and ham to the breakfast array */
breakfast.push("Jalapeno Bagel and Ham");
/* alert the whole array */
alert(breakfast);
/* pull out the newest array member */
alert(breakfast[3]);


/* join - combine all of the items in an array with a specified term or separator */
/* define the sandwich arrays */
var breakfast = ["Egg, Sausage and Cheese", "Egg Whites on Flatbread", "Egg and Cheese"];
var lunch = ["Turkey Club", "Grilled Cheese", "Peanut Butter and Jelly"];
var dinner = ["Meatball", "Hamburger", "Oatmeal and Banana on Rye"];

/* clean up breakfast for output */
var joinBreakfast breakfast.join(", plus ");

/* alert it */
alert('join: ' + joinBreakfast);


/* slice - output a range of items in an array */
/* slice lunch, start at 1 and end at 3 (doesn't include 3) */
var sliceLunch = lunch.slice(1, 3);
/* clean and alert lunch */
var joinLunch = sliceLunch.join(" & ");

alert("slice/join: " + joinLunch); // Grilled Cheese & Peanut Butter and Jelly

/* shift and unshift - method used to add and remove items to the beginning of an array */
/*
SHIFT
*/
/* remove the first element of dinner */
var shiftDinner = dinner.shift();
/* alert it */
alert(" shift: " + shiftDinner) // meatball
/*
UNSHIFT
*/
/* add an item to the beginning of the array */
var unshiftDinner = dinner.unshift("Nacho Cheese-wich");
/* alert it */
alert("unShift: " + dinner); // meatball
