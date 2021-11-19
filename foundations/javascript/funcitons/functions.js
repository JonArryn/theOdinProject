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
////////////////////////////////////////////////////

//  //  Problem solving

// - Understand the problem

// first understand the problem or you'll troubleshoot the wrong thing.
// Write it down and go through your code slowly and inspect what's happening/not happening
// draw diagrams, and write things out in plain english to firgure out the problem

// - Plan

// Plan out how you're going to sole the problem first, some of the questions you should answer at this stage are:

// Does your program ahve a user interface?
// What will it look like?
// What functionality will the interface have?
// Sketch it out on paper

// What inputs will your pogram have?
// Will the user enter data or will you get input from somewhere else?
// What's the desired output?
// Given your inputs, what are the steps necessary to return the desired output?

// Lastly, write the algorithm for solving the problem
// algorithm is like a recipe for solving a particular problem
// It should define the steps that need to be taken by the computer to solve a problem in pseudo code.

// - Pseudo Code

// Write out the logic for your program in natural language instead of code
// This will help you slow down, think through the steps in your program that will help you solve the problem
// pseudo code exmaple:

// When the user inputs a number
// Initialize a counter variable and set its value to zero
// While counter is smaller than user inputted number, increment counter by one
// Print the value of the counter variable

// - Divide and Conquer

// From planning, you should already have identified some subproblems of the biug problem you're solving. Each of the stpes in the algorithm we wrote out in the last section are subproblems
//Remember that oyu might not know all the steps that you might need up front, so algorithm may be incomplete.

// break each problem into sub-problems, and if those sub-problems are also large, break those problems up into sub-problems

// do not try to solve the big problem in one go, this is much more difficult and usually yields less than desirable results.

// given problem
// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

// user inputs the number
// generate all numbers from 1 to the input number
// print fizz for all numbers that are multiple of 3
// for numbers that are mulitiples of both 3 and 5 print FizzBuzz

// function fizzBuzz(number) {
// 	for (let i = 1; i <= number; i++) {
// 		log(i);
// 		if (i % 3 === 0) {
// 			log("fizz");
// 		}
// 		if (i % 3 === 0 && i % 5 === 0) {
// 			log("FizzBuzz");
// 		}
// 	}
// }

// fizzBuzz(90);

// How to think like a programmer notes from - https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/

// Have a Framework - Practice it

// “The biggest mistake I see new programmers make is focusing on learning syntax instead of learning how to solve problems.”

// What do you do when you encounter a new problem?

// - Understand

// Know exactly what is being asked. Most ahrd problems are hard because you don't understand them (Hence why this is first)
// You know you understand a problem when you can explain it in plain english
// If you can't, write down the problem, doodle a diagram or tell someone else about it (Rubber Ducky)

// - Plan

// Plan your solution!
// Nothing can help you if you can't write down the exact steps
// don't start hacking straight away, give your brain time to analyze the problem and process the information
// To plan, answer this question:
// "Given input X, what are the steps necessary to return output Y?"

// use comments!

// - Divide

// Do not try to solve one big problem, you will cry

// Break it into sub-problems
// Solve each sub-problem one by one, beginning with the simplest meaning you are close to the answer
// Simpelist also means that it doesn't require other problems to be solved in order to solve it
// Once you solved every sub-problem, connect the dots
// Connecting all your sub-solutions will give you the solution to the original problem

// This technique is the cornerstone of problem-solving.

//     “If I could teach every beginning programmer one problem-solving skill, it would be the ‘reduce the problem technique.’

// For example, suppose you’re a new programmer and you’re asked to write a program that reads ten numbers and figures out which number is the third highest. For a brand-new programmer, that can be a tough assignment, even though it only requires basic programming syntax.

// If you’re stuck, you should reduce the problem to something simpler. Instead of the third-highest number, what about finding the highest overall? Still too tough? What about finding the largest of just three numbers? Or the larger of two?

// Reduce the problem to the point where you know how to solve it and write the solution. Then expand the problem slightly and rewrite the solution to match, and keep going until you are back where you started.” — V. Anton Spraul

// - Stuck?

// What if you can't even solve the sub-problem

// The different is the best programmers/problem-solvers are more curious about bugs/errors than irritated

// Steps to follow when you are stuck

// The art of debugging is figuring out what you reall told your program to do rrather than what you thought you told it to do

// Reassess: Take a step back. Look at the problem from another perspective. Is there anything that can be abstracted to a more general approach?

// Sometimes we get so lost in the details of a problem that we overlook general principles that would solve the problem at a more general level

// The calssic example of this, of course, is the summation of a long list of consecutive integers, 1+2+3+ ... + n, which a very young Gauss quickly recognized was simply n(n+1)/2, thus avoiding the effort of having to do the addition

// Another way of reassessing is starting anew. Delete everything and begin again with fresh eyes. I'm serious. You'll be dumbfounded at how effective this is.

// Research: Ahh, good ol' google. you read that right. No matter what problem you have, somebody has probably solved it. Find that person/solution. Do this even if you have solved the problem, as you can learn from other people's solutions.

// - Practice

// Don't expect to be great after just one week. If you wanted to be a good problem-solver, solve a lot of problems

// Practice, practice, practice. It'll only be a matter of time before ou recongnize that "This problem could easily be solved with <insert concept here>"

// How to practice? There are options out the wazoo
// Chess puzzles, math problems, Sudoku, Go, Monopoly, video-games, cryptokitties, blah bla

// The most common pattern amongst the most successful people is their hap of practicing "Micro problem-solving". For example, Peter Thiel plays chess, and Elon Musk plays video games.

// “Byron Reeves said ‘If you want to see what business leadership may look like in three to five years, look at what’s happening in online games.’

// Fast-forward to today. Elon [Musk], Reid [Hoffman], Mark Zuckerberg and many others say that games have been foundational to their success in building their companies.”

// *** Pseudo Code

// - What is pseudo coding

// Writing down the logic of a solution to a specific challenge or problem using plain english
