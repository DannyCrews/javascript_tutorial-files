/* push - Adding items to an array */
/* declare breakfast normally */
var breakfast = ["Egg, Sausage and Cheese", "Egg Whites on Flatbread", "Egg and Cheese"];

/* add a jalepeno bagel and ham to the breakfast array */
breakfast.push("Jalepeno Bagel and Ham");

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

