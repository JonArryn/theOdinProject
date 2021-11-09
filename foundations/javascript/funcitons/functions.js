"use strict";
const log = console.log;

// understanding scope

// let x = 1; // global variable, accessible by anything

// function a() {
//   let y = 2; // function scoped, only accessible by code within the function
//   // output(y);
//   // output(x); // outputs x because x is global
//   // output(z); // doesn't work because z is not accessible
// }

// function b() {
//   let z = 3; // function scoped, only accessible by code within the function
//   // output(z);
//   // output(x); // outputs x because x is global
//   // output(y); // doesn't work because y is not accessible
// }

// function output(value) {
//   const para = document.createElement("p");
//   document.body.appendChild(para);
//   para.textContent = "Value: " + value;
//   console.log(value);
// }

// output(x);
// a();
// b();

// *** Practice from https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-3

// function add7(num) {
//   return num + 7;
// }
// log(add7(10));

// function multiply(num1, num2) {
//   return num1 * num2;
// }
// log(multiply(2, 5));

// function capitalize(string) {
//   const lowerCase = string.toLowerCase();
//   const firstLetter = lowerCase.slice(0, 1);
//   const upperFirst = firstLetter.toUpperCase();
//   const stringRemainder = lowerCase.slice(1);
//   return upperFirst + stringRemainder;
// }

// log(capitalize("hUbBa"));

// function lastLetter(string) {
//   return string.slice(-1);
// }
// log(lastLetter("Delta"));
