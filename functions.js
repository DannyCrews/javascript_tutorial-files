/* Writing a basic function */
function sayHello() {
  alert("hey there!");
}

/* calling a function */
sayHello(); // hey there

/* passing a function variable through arguements */

/* declare the function */
function sayHello(message){
  alert(message); // message is also an arguement in the 'alert' method
}

/* call it a couple times with different messages */
sayHello("Hey there, you stink!");
sayHello("I feel bad I just said that.");


/* Define an anonymous function */
(function () {
  /* define a variable inside the function */
  var greeting = "Hello, Dan";
  /* access the variable inside the function */
  alert("in scope: " + greeting);
})(); // end anonymous function

/* try and access the variable outside the function scope */
alert("out of scope: " + typeof(greeting)); // alerts "undefined"


/* using a callback function */
function sayHello(message) {
  alert(message);
}

(function (){
  var greeting = "Welcome",
      exitStatement = "ok, please leave.";

      sayHello(greeting);
      sayHello(exitStatement);
})();


/* returning data with a function */
function sayHello(message) {
  return message + "!"; //add some emotion, too
}


/* returning multiple data values with a function */
function sayHello(greeting, exitStatement){
  /* add some passion */
  var newGreeting = greeting + "!",
      newExitStatement = exitStatement + "!!";
/* return the arguments in an array */
return [newGreeting, newExitStatement];
}

/* using returned function values passed into another function */
function startle(polite, rude){
  /* call the sayHello function */
  var greeting = sayHello(polite, rude)[0],
      exit = sayHello(polite, rude)[1];
  /* alert the variables that have been passed through each function */
  alert(greeting + " -- " + exit);
}

/* call the function with our arguements defined */
startle("thank you", "you stink");


/* grouping similar functions - functions stored in an object are called methods\ */
var addressBookMethods = {
  sayHello: function(message){
    return message;
  },
  startle: function(){
    alert(addressBookMethods.sayHello("hey there, called from a method"));
  }
}
/* call the function */
addressBookMethods.startle();











