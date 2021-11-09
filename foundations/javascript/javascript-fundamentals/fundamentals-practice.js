"use strict";
const log = console.log;

// *** Practice section from article: https://javascript.info/variables

// let message;

// message = "Hello"

// alert(message);

// let message = "Hello"
// alert(message)

// let user = 'John', age = 25, message = "Hello"

// let admin, name

// name = "John"

// admin = name

// alert(admin)

// let ourPlanet = "Earth"

// let currentVisitor = "user"

// *** Practice from https://www.w3schools.com/js/js_numbers.asp

// If you add two numbers, the result will be a number;

// let x = 10;
// let y = 20;
// let z = x + y;
// console.log (z);
// > 30

// If you add two strings, the result will be a string concatenation

// let x = "10";
// let y = "20";
// let z = x + y;
// console.log (z);
// > 1020

// If you add a number and a string, the resule will be a strong concatonation

// let x = 10;
// let y = "20";
// let z = x + y;
// console.log (z);
// > 1020

// If you add a string and a number the result will be astring concatenation

// let x = "10";
// let y = 20;
// let z = x + y;
// console.log (z)
// > 1020

// A common mistake is to expect this reuslt to be 30:

// let x = 10;
// let y = 20;
// let z = "The result is: " + x + y
// console.log (z)
// > The result is : 1020

// A common mistake is to expect this result to be 102030

// let x = 10;
// let y = 20;
// let z = "30"
// let result = x + y + z
// console.log (result)
// > 3030

// The JavaScript interpreter works from left to right.
// First 10 + 20 is added because x and y are both numbers.
// Then 30 + "30" is concatenated because z is a sting.

// - Numeric Strings

// Javascript strings can have numeric content:
// let x = 100; // x is a number
// let y = "100"; // y is a string

// Javascript will try to convert strings to numbers in all numeric operations:
// This will work:

// let x = "100";
// let y = "10";
// let z = x / y;
// console.log (z)
// > 10

// This will also work:

// let x = "100";
// let y = "10";
// let z = x * y;
// console.log (z)
// > 1000

// This will also work:

// let x = "100";
// let y = "10";
// let z = x - y;
// console.log (z)
// > 90

// But this will not work:

// let x = "100";
// let y = "10";
// let z = x + y;
// console.log (z)
// > 10010

// - NaN, Not a Number

// NaN is a Javascript reserved word indivating that number is not a legal number.
// Trying to do arithmetic with anon-numeric string will result in NaN (Not a Number)

// let x = 100 / "Apple";
// > NaN

// However, if the string contains anmeric value, the result will be a number:

// let x = 100 / "10";
// > 10

// You can use the global JavaScript function isNaN() to find out if a value is not a number

// let x = 100 / "Apple";
// isNaN(x)
// > True

// Be careful. Using NaN in a mathematical operation will result in NaN

// let x = NaN;
// let y = 5;
// let z = x + y;
// > NaN

// Or the result might be a concatenation like NaN5

// let x = NaN;
// let y = "5";
// let z = x + y;
// > NaN5

// NaN is a number (Ironically), typeof NaN returns number;

// console.log (typeof NaN);
//> number

// - Infinity
// Infinity (or =Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

// let myNumber = 2;
// // Execute until Infinity
// while (myNumber != Infinity) {
//   myNumber = myNumber * myNumber;
// }
// console.log(myNumber)
//> Infinity

// Division by 0 (zero) also generates Infinity:

// let x = 2 / 0;
// let y = -2 / 0;
// console.log(x, y)
//> Infinity -Infinity

// Infinity is anumber: typeof Infinity returns number.

// - Hexadecimal
// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x

// let x = 0xFF
// console.log(x)
//> 255

// NOTE: Never write a number with a leading zero (like 07)
// Some JavaSCript versions interpret numbers as octal if they are written with al eading zero.

// By default, JavaScript displays numebrs as base 10 decimals.
// But you can use the toString() method to output numbers from base 2 to base 36
// Hexadcimal is base 16. Octal is base 8. Binary is base 2

// let myNumber = 32;
// console.log(myNumber.toString(10))
// > 32
// console.log(myNumber.toString(32))
// >10
// console.log(myNumber.toString(16))
// >20
// console.log(myNumber.toString(8))
// >40
// console.log(myNumber.toString(2))
// >100000

// - JavaScript Numbers as Objects
// Normally JavaScript numbers are primitive values created from literals:
// But numbesr can also be defined as objects with the keyword new:

// let y = new Number(123);
// console.log(y)
//> Number { 123 }

// Do not create Number objects
// The new keyword complicates the code and slows down execution speed.
// Number oBjects can produce unexpected results:

// When using the == operator, x and y are equal:
// let x = 500;
// let y = new Number(500);
// console.log(x == y)
//> true

// let x = 500;
// let y = new Number(500);
// console.log(x === y)
//> false

// comparing two JavaScript objects ALWAYS returns FALSE

// *** Practice from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math

// To round a number to a fixed number of decimal places, use the toFixed() method

// let lotsOfDecimal = 1.766584968575746364;
// console.log(lotsOfDecimal)
// let twoDecimalPlaces = lotsOfDecimal.toFixed(2)
// console.log(twoDecimalPlaces)
//> 1.77

// To convert a number that is currently a data type of string, pass it into the Number() constructor

// let myNumber = '74'
// console.log(myNumber + 3)
//> 743

// console.log(typeof myNumber)
//> string

// To fix the calculation:
// console.log(Number(myNumber) + 3);
//> 77

// I fully understand operators including % remainder and powers **
// I understand that JavaScript follows PEMDAS order of operations when performing arithmetic calculations

// - Increment and decrement operators

// Use ++ and -- to add or subtract 1 from the value of a variable

// console.log(3++)
//> returns error, can only inc/dec existing variable

// let num1 = 4;
// console.log(num1++)
//> 4 // note that console will log num1 then increment it after
// console.log(num1)
//> 5

// The same is true with decrementing
// however instead the best way to use increment and decrement is to put the ++ or -- in front of the variable.

// let myNumber = 10;
// console.log(++myNumber)
//> 11

// - Assignment Operators
// Assignment operators operators that assign a value to a variable.

// There are some complex types of operators which provide usefule shortcuts to keep code neater and more efficient. The most common are:

// += Addition assignment, adds the value on the rot the variable value on the left then returns the new value - x += 4 same as x = x + 4
// Subtraction assignment -=
// Multiplicaiton assignment *=
// Division assignment /=

// let x = 3;
// let y = 4;
// x *= y
// console.log(x)
//> 12

// - Comparison Operators

// === Strict equality
// Tests whether the lft and right values are identical to one another

// !== Strict non-equality
// Test whether the left and right values are NOT identical to one another

// < Less than
// Tests wheter the left value is smaller than the right one

// > greater than
// Tests whether the left value is greater than the right one.

// <= less than or equal to
// Tests whether the left value is smaller than or equal to the right one

// >= Greater than or equal to
// Tests whether the left value is greater than or equal to the right one

// NOTE: == and != are also valid, however they are not strict
// Unlike === and !== which test for both value and data type equality

// *** Basic Operators, Maths practice from https://javascript.info/operators

// - Numeric conversion, unary +

// The unary plus (+) when applied to a single value, doesnt do anything to nubers. But if the operand is not anumber, the unary pls converts it into a number

// let x = 1
// console.log(+x)
// > 1

// let y = -2
// console.log(+y)
// > -2

// console.log(+true)
// > 1
// console.log(+"")
// > 0

// The need to convert strings to numbers arises often, most commonly when getting form data or other data from HTML, which often retruns numbers in the form of a string

// *** Assignment from TOP - https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-1

// console.log (23+97)
// console.log(1 + 2 + 3 + 4 + 5 + 6)
// console.log((4 + 6 + 9) / 77)

// let a = 10;
// console.log(a)
// console.log(9 * a)
// let b = 7 * a
// console.log(b)

// const max = 57;
// const actual = max - 13
// const percentage = actual / max
// console.log(percentage)

// *** Practice from https://www.w3schools.com/js/js_string_methods.asp

// - String Methods and Properties
// - Length

// let txt = "asdfasdlfkjasdfkljasdf"
// let length = txt.length
// console.log(length)
// >22

// - Extracting String Parts

// There are 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start,end)
// substr(start, length)

// - Slice

// slice() extracts a part of a string and returns the extrated part in anew string.
// The method takes 2 parameters: the start position, and the end positon (end not included)

// let str = "Apple, Banana, Kiwi"
// let part = str.slice(7, 13)
// console.log(part)
// >banana

// If a parameter is negative, the position is counted from the end of the string.

// let str = "Apple, Banana, Kiwi"
// let part = str.slice(-12, -6)
// console.log(part)
// >Banana

// If you omit the secnd parameter, the method will slice out the rest of the string:

// let str = "Apple, Banana, Kiwi"
// let part = str.slice(7)
// console.log(part)
// >Banana, Kiwi

// or counting from the end:

// let str = "Apple, Banana, Kiwi"
// let part = str.slice(-12)
// console.log(part)
// >Banana, Kiwi

// - The substring method

// Similar to slice but cannot accept negative value indexes

// let str = "Apple, Banana, Kiwi"
// let part = str.substring(7, 13)
// console.log(part)
// >Banana

// Like slice, if you omit the second param, the rest of the string will be sliced

// let str = "Apple, Banana, Kiwi"
// let part = str.substring(7)
// console.log(part)
// >Banana, Kiwi

// - The substr() method

// Similar to slice, except the difference is that hte second parameter specifices the length of the extracted part.

// let str = "Apple, Banana, Kiwi"
// let part = str.substr(7, 6)
// console.log(part)
// >Banana

// like the others, omitting the second param will pull the rest of the string

// let str = "Apple, Banana, Kiwi"
// let part = str.substr(7)
// console.log(part)
// >Banana, Kiwi

// If the first parameter is negative, the position counts from the end of the string

// let str = "Apple, Banana, Kiwi"
// let part = str.substr(-4)
// console.log(part)
// >Kiwi

// - Replacing string content

// The replace() method replaces a specified value with another value in a string

// let text = "Please visit Microsoft!"
// let newText = text.replace("Microsoft", "W3Schools")
// console.log(newText)

// replace does not change the string it is called on, it returns a new value

// By default, the replace() method replaces only the first match

// let text = "Please visit Microsoft and Microsoft!"
// let newText = text.replace("Microsoft", "W3Schools")
// console.log(newText)
// >Please visit W3Schools and Microsoft!

// replace() is also case sensitive

// let text = "Please visit Microsoft and Microsoft!"
// let newText = text.replace("MICROSOFT", "W3Schools")
// console.log(newText)
// >Please visit Microsoft and Microsoft!

// To replace case insensitive, use a regular expression with an /i flav (insensitive) instead of quotes

// let text = "Please visit Microsoft and Microsoft!"
// let newText = text.replace(/MICROSOFT/i, "W3Schools")
// console.log(newText)
//> Please visit W3Schools and Microsoft!

// To replace all matches, use a regular expression with a /g flag (global match)

// let text = "Please visit Microsoft and Microsoft!"
// let newText = text.replace(/Microsoft/g, "W3Schools")
// console.log(newText)
//> Please visit W3Schools and W3Schools!

// - Converting to upper and lower case

// A string is converted to upper case with toUpperCase()

// let text1 = "Hello World!"
// let text2 = text1.toUpperCase()
// console.log(text2)
//> HELLO WORLD!

// A string is converted to lower case with toLowerCase()

// let text1 = "Hello World!"
// let text2 = text1.toLowerCase()
// console.log(text2)
//> hello world!

// - The concat() Method

// concat() joins two or more strings:

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2)
// console.log(text3)
//> Hello World

// - String.trim()

// The trim() method removes whitespace from both sides of a string:

// let text = "     Hello World     "
// console.log(text.trim())
//> Hello World

// - JavaScript string padding
// ECMAScript 2017 added two string methods: padStart and padEnd to support padding at the beginning and at the end of a string.

// let text = "5"
// let padded = text.padStart(4,0)
// console.log(padded)
//>0005

// let text = "5"
// let padded = text.padEnd(4,0)
// console.log(padded)
//>5000

// - Extracting String Characters
// There are 3 methods for extracting string characters:
// charAt(postioin)
// carCodeAt(popsition)
// Property access []

// - charAt()
// The carAt() method returns the character at a specified index (position) in a string

// let text = "HELLO WORLD"
// let char = text.charAt(0)
// console.log(char)
//> H

// - charCodeAt()
// The charCodeAt() method returnst he unicode of the character at a specified index in a string:

// let text = "HELLO WORLD"
// let char = text.charCodeAt(0)
// console.log(char)
//> 72

// - Property Access
// ECMAScript 5 (2009) allows property access [] on strings

// let text = "HELLO WORLD"
// let char = text[0]
// console.log(char)
//> H

// Property access might be a little unpredicatble
// - Makes strings like like arrays (but they are not)
// - If no character is foun, [] returns undefined wil charAt() returns empty string
// - It is read only. str[0] = "A" gives no error but does not work

// - Converting a string to an array
// A string can be converted to an array with the split() method

// let text = "HELLO WORLD"
// console.log(text.split(","))
//> Array [ "HELLO WORLD" ]

// return array of single characters

// console.log(text.split(""))
//> Array(11) [ "H", "E", "L", "L", "O", " ", "W", "O", "R", "L", … ]

// *** Comparisons

// * Practice from https://javascript.info/comparison

// when comparing strings, JS compares letter by letter, and which ever string has the highest value in the alphabet first is greater. So ABC < BAC // true

// log("Z" > "A") // true
// log("Glow" > "Glee") // true
// log("Bee" > "Be") // true
// log("ABC" < "BAC") // true

// - Comparison of different types
// When comparing values of different types, JavaScript convers the values to numbers.
// == compares values with type conversion where JS will convert all values to numbers then compare

// log("2" > 1) // true
// log("01" == 1) // true

// For boolean values, true becomes 1 and false becomes 0
// true == 1 and false == 0, so when comparing the two, non-strict comparison makes it true

// log(true == 1) // true
// log(false == 0) // true

// - Strict Equality
// === compares values without type conversion
// if the two values being compared with === are different types then JS will find the comparison to be false

// log(0 === false) // false

// *** Practice from https://www.w3schools.com/js/js_if_else.asp

// * JavaScript if else and else if

// conditional statements are used to perform different actions based on different conditions
// use if to specify a block of code to be executed if a specified condition is true
// use else to specify a block of code to be executed if the same condition is false
// use else if to specify a new condition to test, if the first condition is false
// use switch to specify many alternative blocks of code to be exectued

// - The if statement
// if (condition) {// block of code to be executed}

// let greeting;
// let hour = 17
// if (hour < 18) {
//   greeting = "Good Day"
//   log(greeting)
// } //> Good Day

// - the else statement

// if (condition) {
// execute this block of code
// } else {
// execute this block of code if condition is false
// }

// let greeting;
// let hour = 19

// if (hour < 18) {
//   greeting = "Good Day"
//   log(greeting)
// }else {
//   greeting = "Good Evening"
//   log(greeting)
// } //> Good Evening

// - the else if statement

// let greeting;
// let time = 19
// if (time < 10) {
//   greeting = "Good Morning"
//   log(greeing)
// }else if (time < 20) {
//   greeting = "Good Day"
//   log(greeting)
// } else {
//   greeting = "Good Evening"
//   log(greeting)
// } //> Good Day

// *** Practice from https://javascript.info/logical-operators

// - Logical Operators
// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing)

// - OR

// classicaly, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, returns true, otherwise it returns false.
// in JS, the operator is a little bit trickier and more powerful, but first let's see what happens with boolean values..
// There are four possible logical combinations

// log(true || true) // true
// log(false || true) // true
// log(true || false) // true
// log(false || false) // false

// this demonstrates that all possibilities return true unless both values are false

// if an operand is not a boolean, it's converted to a boolean for the evaluation
// the number 1 is treated as true, the number 0 as false

// if (1 || 0) {
//   log('truthy!')
// } //> truthy!
// in most cases, OR || is used to test if any of the conditions is true

// let hour = 9;

// if (hour < 10 || hour > 18) {
//   log('The office is closed.')
// } //> The office is closed.

// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   log('The office is closed.')
// } //> The office is closed.

// - OR Finds the first truthy value

// given multiple OR'ed values:

// result = value1 || value2 || value3

// The OR operator:
// * Evaluates operands from left to right
// * For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand
// * If all operands have been evaluated (i.e. all wer fales), returns the last operand

// A value is returned in its original form, without conversion.
// In other words, a chain of OR || returns the first truthy value of the last one if no truthy value is found.

// log(1 || 0); //> 1 (1 is truthy)
// log (null || 1); //> 1 (the first truthy value)
// log(null || 0 || 1); //> 1 (the first truthy value)
// log(undefined || null || 0) //> 0 (all falsy, returns last value)

// - Getting the firs ttruthy value from a list of variabls or expressions
// use OR to choose the one that has the data and show it (or "ANONYMOUS" if nothing is set)

// let firstName ="";
// let lastName = "";
// let nickName = "SuperCoder";

// log(firstName || lastName || nickName || "Anonymous")
//> SuperCoder

// - Short-circuit evaluation
// A feature of OR is the "Short-Circuit" evaluation
// Mean that OR processes its arguments until the first truthy value is reached, and then the value is returned immediately without even touching the other argument.
//The importance of this feature becomes obvious if an operand isn't just a value, but an expression with a side effect, such as a variable assignment or a function call

// true || log("not printed");
// false || log("printed");
// //> printed

// In the first line, the OR operator stops the evaluation immediately upon seeing true, so the log isn't run
// Sometimes, this feautre is used to execute commands only if the condition on the left side is falsy

// - && (AND)

// The AND operator is represented with two ampersands &&
// Classically, AND returns true if both operands aare tyrthy, and flase otherwise

// log (true && true); //> true
// log (false && true); //> false
// log (true && false); //> false
// log (false && false); //> false

// example with if:

// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   log("The time is 12:30")
// } //> The time is 12:30

// Just as with OR, any value is allowed as an operand of AND

// if (1 && 0) {
//     log("won't work, because the result is falsy")
//     }

// - AND finds the first falsy value

// AND:
// Evaluates operands from left to right
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand
// If all operands have been evalulated (i.e. all were truthy), returns the last operand

// In other words, AND returns the first falsy value or the las value if none were found
// Similar to OR but instead returns the first falsy value in contrast to truthy

// if the first operand is truthy,
//AND returns the second operand

// log (1 && 0); //> 0 // falsy
// log (1 && 5); //> 5 // both true so returned last value

// if the first operand is falsy,
// AND returns it, the second operand is ignored

// log( null && 5); //> null
// log (0 && "no matter what"); //> 0

// - Precendence

// && has higher precedence than OR ||

// a && b || c && d is the same as
// (a && b) || (c && d)

// - Don't replace if with || or &&
// && and || do not evaluate the entire expression, if will

// let x = 1;
// (x > 0) && (log("Greater than zero"));
// the action to the right of && would only execute if the code reaches it
// (x > 0) has to be true for the code to run
// this is the same as :

// let z = 1
// if (z > 0) log("greater than zero");

// - ! NOT

// The boolean NOT operator is represented with an exclamation sign !

// The syntax is simple

// result = !value

// The operator accespts a single argument and does the following:

// * Converts the operand to a boolean type: true/false
// * returns the inverse value

// log (!true); //> false
// log (!0); //> true

// a doubl NOT !! can be used to conver a value to a boolean type

// log( !!"non-empty string"); //> true
// log(!!null);  //> false

// The first NOT converts the value to boolean and returns the inverse, and teh second NOT inverses it again. in the end, we have a plain value to boolean conversion
// There's a more verbose way to achieve this however.

// log(Boolean("non-empty string")); //> true
// log(Boolean(null)); //> false

// - Precedence of NOT
// NOT is the highest of all logical operators, so it always executes first, before && or ||

// What will the code below output?

// log (log(1) || 2 || log(3));
//> 1
//> 2

// The call to log does not return a value. or in other words it reutrns undefined
// * The first OR evaluates its left operand, log(1) that shows the first message with 1
// * The log returns undefined, so OR goes on to the second operand seraching for a truthy value
// * The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer log

// what will this code show?

// log( log(1) && log(2));
//> 1
//> undefined

// The call to log returns undefined (just shows a message so there's no meaningful return)
// Because of that, && evaluates the left operand (outputs 1), and immediately stops because undefined is a falsy value. And && looks for a falsy value and returns it, so it's done.

// what wil the result be?

// log( null || 2 && 3 || 4);
//> 3
// The precedence of AND is higher than OR so it executes first.
// The result of 2 && 3 = 3 so the expression becomes null || 3 || 4
// resulting in 3 which is the first truthy value

// write an if condition to check that age is beteween 14 and 90 inclusively

// let age = 25;

// if (age >= 14 && age <= 90) {
//   log("is of age")
// };

// write an if ocndition to check that age is NOT between 14 and 90 inclusively
// create two varints: the first on using NOT! the second without

// let age = 12;

// if (!(age >= 14 && age <= 90)) {
//   log("Is not of age")
// };

// if (age < 14 || age > 90) {
//   log("Is not of age")
// };

// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

//     If it equals “TheMaster”, then show “Welcome!”,
//     Another string – show “Wrong password”,
//     For an empty string or cancelled input, show “Canceled”

// let login = prompt("who's there?", '')

// if (login === "Admin") {

//   let password = prompt("Password?", '');

//   if (password === "TheMaster"){
//     alert("Welcome");
//   } else if (password === null || password === ""){
//     alert("Canceled");
//   } else alert("Wrong password");

// } else if (login === null || login === "") {
//   alert("Canceled");
// } else alert("I don't know you");

// *** Practice from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

// Basic if ...else syntax

// if (condition) {
// code to run if condition is true
// } else {
//   run some other code
// }

// let shoppingDone = false;
// let childsAllowance;

// if (shoppingDone === true) {
//   childsAllowance = 10;
// } else {childsAllowance = 5};
// log(childsAllowance)
//> 5

// - switch

// switch (expression) {
//   case choice1:
//     run this code;
//     break;
//   case choice2:
//     run this code instead;
//     break
//     // include as many cases as needed

//   default:
//     actually, just run this code;
//     // runs if no choices match condition
// }

// - ternary operator

// (condition) ? run this code : else run this code;

// practice from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals

// let season = 'winter';
// let response;

// if (season === "summer"){
//   response = "Summer is the season"
//   log(response)
// }else {
//   response = "I don't know the season"
//   log(response)
// }

// let response;
// let score = 107;
// let machineActive = true;

// if (!machineActive){
//   response = "Machine is not active, please start it.";
//   log(response);
// } else {
//   if (score < 0 || score > 100){
//     response = "This is not possible, an error has occurred";
//     log(response);
//   } else if (score >= 0 && score <= 19) {
//     response = "This is a terrible score, total fail";
//     log(response);
//   } else if (score >= 20 && score <= 39) {
//     response = "You know some thing, but it\'s a pretty bad score";
//     log(response);
//   } else if (score >= 40 && score <= 69) {
//     response = "You did a passable job, not bad!";
//     log(response);
//   } else if (score >= 70 && score <= 89) {
//     response = "That\'s a great score, you really know your stuff";
//     log(response);
//   } else if (score >= 90 && score <= 100) {
//     response = "What an amazing score! Did you cheat? Are you for real?";
//     log(response);
//   } else {
//     response = "Something went wrong"
//     log(response)
//   }
// }

// let machineActive = true;
// let pwd = 'cheese';

// let machineResult;
// let pwdResult;

// if (!machineActive) {
//   machineResult = "Maching is not running, please start it";
//   log(machineResult);
// } else {pwd === 'cheese' ? pwdResult = "logged in" : pwdResult = "Incorrect Password";
//         log(pwdResult)};

// *** Practice from https://javascript.info/ifelse

// - Chaining ternary

// let age = prompt('age?', 18);
// let message = (age < 3) ? 'Hi, baby.' : (age < 18) ? 'Hello!' : (age < 100) ? "Greetings!" : "What an unusual age!"
// alert(message);

// - Non-traditional use of ?

// Sometimes the question mark is used as a replacement for if, but don't use this, just be aware that you might see it

// let company = prompt('which company created javascript?', '');

// (company == 'Netscape') ?
// alert('Right!') : alert('Wrong!');

// let officialName = prompt("What is the official name of JavaScript?", '')

// if (officialName == "ECMAScript") {
//   alert('Right!')
// } else {alert ('Wrong!')}

// let input = prompt("Enter a number", '')

// if (input === 0) {
//   alert(0);
// } else if (input > 0) {
//   alert(1)
// } else {alert(-1)}

// let result;
// let a = 2;
// let b = 1;

// (a + b < 4) ? result = 'Below' : result = 'Over';

// log(result)

// - re-write using conditional ?

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// // solution

// let message;
// let login = prompt("Enter Login", '');

// (login == 'Employee') ? message = "Hello" : (login == 'Director') ? message = 'Greetings' : (login == '') ? message = 'No login' : message = '';

// log(message);

// *** Practice From https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript

// pseudo code

// switch(expression) {
//   case x:
//     // run this code
//     break;
//   case y:
//     // run this code
//     break;
//   default:
//     // otherwise run the default code block
// }

// const day = new Date().getDay()

// switch(day) {
//   case 0:
//     log("It's Sunday, time to relax!");
//     break;
//   case 1:
//     log("Happy Monday");
//     break;
//   case 2:
//     log("It's Tuesday. You got this!");
//     break;
//   case 3:
//     log("Hump day already!");
//     break;
//   case 4:
//     log("Just one more day 'til the weekend!");
//     break;
//   case 5:
//     log("Happy Friday!");
//     break;
//   case 6:
//     log("Have a wonderful Saturday!");
//     break;
//   default:
//     log("Something went wrong");
// }

// - Switch Ranges
// evaluate ranges by using "true" as your expression, then use comparisons in cases

// const grade = 87;

// switch(true) {
//   case grade >= 90:
//     log("A");
//     break;
//   case grade >= 80:
//     log("B");
//     break;
//   case grade >= 70:
//     log("C");
//     break;
//   case grade >= 60:
//     log("D");
//     break;
//   case grade >= 50:
//     log("F")
//     break;
//   default:
//     log("F")
// }

// - Multiple Cases

// const month = new Date().getMonth();
// let monthName = new Array(12);
// monthName[0] = "January";
// monthName[1] = "February";
// monthName[2] = "March";
// monthName[3] = "April";
// monthName[4] = "May";
// monthName[5] = "June";
// monthName[6] = "July";
// monthName[7] = "August";
// monthName[8] = "September";
// monthName[9] = "October";
// monthName[10] = "November";
// monthName[11] = "December";

// switch(monthName[month]) {
//     // January, February, March
//   case "January":
//   case "February":
//   case "March":
//     log("Winter");
//     break;
//   case "April":
//   case "May":
//   case "June":
//     log("Spring");
//     break;
//   case "July":
//   case "August":
//   case "September":
//     log("Summer");
//     break;
//   case "October":
//   case "November":
//   case "December":
//     log("Autumn");
//     break;
//   default:
//     log("Something Went Wrong");
// }
