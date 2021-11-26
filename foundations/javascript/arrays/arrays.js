"use strict";
const log = console.log;
const body = document.querySelector("body");

let fruits = ["Banana", "Orange", "Apple", "Mango"];

function resetFruits() {
  fruits = ["Banana", "Orange", "Apple", "Mango"];
}

function addMarkupToElement(element, markup) {
  element.insertAdjacentHTML("beforeend", markup);
}

addMarkupToElement(
  body,
  `
<h2>Example Data</h2>
<p>const fruits = ["Banana", "Orange", "Apple", "Mango"];</p>
`
);

addMarkupToElement(
  body,
  `
<h3>The toString() method</h3>
<p>fruits.toString()</p>
<p>Result: ${fruits.toString()}</p>
`
);

addMarkupToElement(
  body,
  `
<h3>The join() Method</h3>
<p>fruits.join(" * ")</p>
<p>Result: ${fruits.join(" * ")}</p>
`
);

addMarkupToElement(
  body,
  `
<h3>The pop() Method</h3>
<p>The pop() method removes the last elelment from an array</p>
<p>fruits.pop()</p>
<p>Result: ${fruits.pop()}</p>
<p>The push() method also returns the popped element</p>`
);

fruits.push("Kiwi");

addMarkupToElement(
  body,
  `

<h3>The push() Method</h3>
<p>The push() method adds a new element to the end of an array</p>
<p>fruits.push("Kiwi")</p>
<p>Result: ${fruits}</p>
<p>push() also returns the new array length</p>

`
);

addMarkupToElement(
  body,
  `

<h2>Shifting Elements</h2>
<p>Shifting is equivalent to popping, working on the first element instead of the last</p>
<p>The shift() method removes the first array element and "shifts" all other elements to a lower index</p>

`
);

fruits.shift();
addMarkupToElement(
  body,
  `

<h3>The shift() method</h3>
<p>fruits.shift()</p>
<p>Result: ${fruits}</p>

`
);

resetFruits();
fruits.unshift("lemon");

addMarkupToElement(
  body,
  `

<h3>The unshift() Method</h3>
<p>The unshift() method adds a new element to an array at the beginning and "unshifts" older elements</p>
<p>fruits.unshift()</p>
<p>${fruits}</p>
<p>unshift() also returns the new array length</p>

`
);

addMarkupToElement(
  body,
  `

<h2>Changing Elements</h2>
<p>Array elements are accessed using their index number</p>
<p>Array indexes start with 0</p>
<p>[0] is the first array element</p>
<p>[1] is the second</p>
<p>[2] is the third... </p>

`
);

resetFruits();

fruits[0] = "Kiwi";

addMarkupToElement(
  body,
  `

<h3>Changing Elements Example</h3>
<p>fruits = fruits = ["Banana", "Orange", "Apple", "Mango"];</p>
<p>fruits[0] = "Kiwi"</p>
<p>Result: ${fruits}

`
);

resetFruits();
fruits.splice(2, 0, "Lemon", "Kiwi");

addMarkupToElement(
  body,
  `

<h2>Splicing an Array</h2>
<p>The splice() method can be used to add new items to an array</p>
<h3>Example</h3>
<p>fruits = ["Banana", "Orange", "Apple", "Mango"];</p>
<p>fruits.splice(2, 0, "Lemon", "Kiwi")
<p>Result: ${fruits}</p>
<p>The first parameter (2) defines the position WHERE new elements should be added (spliced in)</p>
<p>The second parameter (0) defines how many elements should be removed</p>
<p>The rest of the parameters, ("Lemon", "Kiwi") define the new elements to be added</p>
<p>The splice() method returns an array with the removed items</p>

`
);

resetFruits();
fruits.splice(0, 1);

addMarkupToElement(
  body,
  `

<h3>Using splice() to Remove Elements</h3>
<p>With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:</p>
<h3>Example</h3>
<p>fruits = ["Banana", "Orange", "Apple", "Mango"];</p>
<p>fruits.splice(0, 1)</p>
<p>Result: ${fruits}</p>
<p>The first parameter (0) defines the position wher new elements should be added (spliced in)</p>
<p>The second parameter (1) defins how many elements should be removed</p>
<p>The rest of the parameters are omitted. So no new elements will be added</p>

`
);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren2 = arr1.concat(arr2, arr3);

const arr4 = ["Emil", "Tobias", "Linus"];
const myChildren3 = arr4.concat("Peter");

addMarkupToElement(
  body,
  `
    <h2>Merging (Concatenating) Arrays</h2>
    <p>The concat() method creates a new array by merging (concatenating) existing arrays:</p>
    <p>const myGirls = ["Cecilie", "Lone"];</p>
    <p>const myBoys = ["Emil", "Tobias", "Linus"];</p>
    <p>const myChildren = myGirls.concat(myBoys);</p>
    <p>Result: ${myChildren}</p>
    <p>The concat() method does not change the existing arrays. It always returns a new array.</p>
    <p>The concat() method can take any number of array arguments:</p>
    <h3>Example: Merging Three Arrays</h3>
    <p>const arr1 = ["Cecilie", "Lone"];</p>
    <p>const arr2 = ["Emil", "Tobias", "Linus"];</p>
    <p>const arr3 = ["Robin", "Morgan"];</p>
    <p>const myChildren = arr1.concat(arr2, arr3);</p>
    <p>Result: ${myChildren2}</p>
    <p>The concat() method can also take strings as arguments:</p>
    <h3>Example: Merging an Array with Values</h3>
    <p>const arr1 = ["Emil", "Tobias", "Linus"];</p>
    <p>const myChildren = arr1.concat("Peter"); </p>
    <p>Result: ${myChildren3}</p>

`
);

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const citrus = fruits.slice(1);

addMarkupToElement(
  body,
  `

<h2>Slicing an Array</h2>
<p>The slice() method slices out a piece of an array into a new array.</p>
<p>This example slives out a part of an array starting form array element 1 ("Orange")</p>
<p>const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];</p>
<p>const citrus = fruits.slice(1);</p>
<p>Result: ${citrus}</p>
<p>The slice() method creates a new array. It does not remove any elements from the source array.</p>


`
);

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits.slice(1, 3);
addMarkupToElement(
  body,
  `
<h3>Slicing Portions of an Array</h3>
<p> The slice() method can take two arguments like slice(1, 3).</p>
<p>The method then selects elements from the start argument, and up to (but not including) the end argument.</p>
<h3>Example</h3>
<p>fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];</p>
<p>const citrus2 = fruits.slice(1, 3);</p>
<p>Result: ${citrus2}</p>


`
);

addMarkupToElement(body, ``);

addMarkupToElement(
  body,
  `
	<h2>Loops</h2>
	<p>Practice from <a href="https://javascript.info/while-for">https://javascript.info/while-for</a></p>
	<h3>The While Loop</h3>
	<p>The While Loop has the following syntax:</p>
	<p>while (condition) {</p>
	<p> // code</p>
	<p> // so-called "loop body"</p>
	<p>}</p>
	<p>If the condition is truthy, the code from the loop body is executed</p>
	<p>For instance, the loop below outputs i while i < 3</p>
	<code>
	let i = 3;<br>
	while (i < 3) { // shows 0, then 1, then 2 <br>
		alert( i ); <br>
		i++;<br>
	}
	</code>
	`
);
addMarkupToElement(
  body,
  `
	<p>A single execution of the loop body is called an iteration. The loop in the example above makes three iterations</p>
	<p>If i++ was missing from the example above, the loop would repeat (In theory) forever. In practice, the browser provides ways to stop such lops, and in server-side JavaScript, we can kill the process</p>
	<p>Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.</p>
	<p>For instance, a shorter way to write while (i != 0) is while (i)<p>
	<code>
	let i = 3;<br>
	while (i) {// when i becomes 0, the condition becomes falsy, and the loop stops<br>
	alert( i )<br>
		i--<br>
	}
	</code>`
);

addMarkupToElement(
  body,
  `
	<h3>The "do...while" loop</h3>
	<p>The condition check can be moved below the loop body using the do..while syntax:</p>
	<code>
	do {<br>
	// loop body<br>
	}while (condition)
	</code>
	<p>The loop will first execute the body, then check the condition, and, while it's truthy, execute it again and again.</p>
	<p>For example:</p>
	<code>let i = 0;<br>
	do {<br>
	alert( i )<br>
	i++<br>
	} while (i < 3)
	</code>
	<p>This form of syntax should only be used when you whant the body of the loop to execute at least once regardless of the condition being truthy. usually, the other form is preferred: while(...) {...}</p>
	`
);

addMarkupToElement(
  body,
  `
	<h3>The For Loop</h3>
	<p>The for loop is more complex, but it's also the most commonly used loop.</p>
	<p>It looks like this:</p>
	<code>
	for (begin; condition; step) {<br>
	// ... loop body ...<br>
	}
	</code>
	<p>Let's learn the meaning of these parts by example. The loop below runs aler(i) for i from 0 up to (but not including) 3:</p>
	<code>
	for (let i = 0; i <3; i++) { // shows 0, then 1, then 2 <br>
	alert( i )<br>
	}
	</code>
	`
);
addMarkupToElement(
  body,
  `
	<h3>Skipping Parts</h3>
	<p>Any part of for can be skipped.</p>
	<p>For Example, we can omit begin if we don't need to do anything at the loop start</p>
	<code>
	let i = 0; // we have i already declared and assigned<br>
	<br>
	for (; i < 3; i++) { //no need for "begin"<br>
	alert(i); // 0, 1, 2<br>
	}
	</code>
	<p>We can also remove the step part -</p>

	<code>
	let i = 0;<br>

for (; i < 3;) {<br>
  alert( i++ );<br>
}
	</code>

	<p>This makes the loop identical to while ( i < 3 )</p>
	<p>Please note that when skipping steps, the semi-colons in the syntax must still be present</p>
	<h3>Breaking The Loop</h3>
	<p>Normally, a loop exits when its condition becomes falsy.</p>
	<p>But we can force the exit at any time using the special break directive.</p>
	<p>For example, the loop below asks the user for a series of numbers, "breaking" when no number is entered:</p>
	<code>
	let sum = 0;<br>
	while (true) {<br>
		let value = +prompt("Enter a number", '');<br>
		if (!value) break; // (*)<br>
	sum += value;<br>
	}<br>
	alert( 'Sum: ' + sum;
	</code>
<p>The break directive is activated at the line (*) if the user enters an empty line or cancels the input. It stops the loop immediately, passing control of the first line after the loop. Namely, alert.</p>
	`
);
addMarkupToElement(
  body,
  `
	<h3>Contine to the next iteration</h3>
<p>The continue directive is a "lighter version" of break. it doesn't stop the whole loop. Instead, it stops the current iteration and forces the loop to starta  new one (if the condition allows).</p>
<p>We can use if it we're done with the current iteration and would like to move on to the next one</p>
<p>The loop below uses continue to output only odd values</p>
<code>
for (let i = 0; i < 10; i ++) {<br>
// if true, skip the remaining part of the body<br>
if (i % 2 == 0) continue;<br>
alert(i); // 1, then 3, 4, 5, 9<br>
}
</code>
<p>For even values of i, the continue directive stops executing the body and passes control to the next iteration of for (with the next number). So the alert is only called for odd values.</p>
	`
);
addMarkupToElement(
  body,
  `
<h3>The continue directive helps decrease nesting</h3>
<p>A loop that shows odd values could look like this:</p>
<code>
for (let i = o; i < 10; i++) {<br>
if ( i % 2 ) {<br>
alert( i );<br>
}<br>
}
</code>
<p>From a technical piont of view, this is identical to the example above. Surely, we can jsut wrap the code in an if block instead of using continue.</p>
<p>But as a side-effect, this created on more level of nesting (the alert call inside the curly braces). If the code inside of if is longer than a few lines, that may decreate the overall readbility.</p>

`
);
addMarkupToElement(
  body,
  `
<h3>No break/continue to the right side of '?'</h3>
<p>Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren't allowed there.</p>
<p>For example, If we take this code:</p>
<code>
if (i > 5) {<br>
alert(i);<br>
} else {continue;<br>
}
</code>
<p>... and rewrite it using a questino mark:</p>
<code>
(i > 5) ? alert(i) : continue; // continue isn't allowed here
</code>
<p>.. it just stops working: there's a syntax error.</p>
<p>This is just another reason not to use the question mark operator instead of if</p>
`
);
addMarkupToElement(
  body,
  `
<h3>Labels for break/continue</h3>
<p>Sometimes we need to break out from multiple nested loops at once.</p>
<p>Fro example, in the code below, we loop over i and j, prompting for the coordinates of (i,j) from (0,0) to (2,2)</p>
<code>
for (let i = 0; i < 3; i++) {<br>
for (let j =0; j < 3; J==) {<br>
let input = prompt('Value at coords ( $ {i}, $ {j}), '');<br>
// what if we want to exit from here to Done (below)<br>
}<br>
}
alert('Done!')
</code>
<p>We need a way to stop the process if the user cancels the input</p>
<p>The ordinary break after input would only break the inner loop. That's not sufficient - labels, come to the rescure!</p>
<p>A label is an identifier with a colon before a loop:</p>
<code>
labelName: for (...) {<br>
... <br>
}
</code>
<p>The break <labelName> statement in the loop below breaks out to the label:</p>
<code>
outer: for (let i = 0; i < 3; i++ ){<br>
for (let j = 0; j < 3; j++){<br>
let input = prompt('Value at coords ($ {i}, $ {j}), '');<br>
// if an empty string or canceled, then break out of both loops<br>
if (!input) break outer; // (*)<br>

// do something with the value...<br>
}<br>
}<br>
alert('Done!')
</code>
<p> In the code above, break outer looks upwards fo rthe label named outer and breaks out of that loop.</p>
<p>So the contorl goes straight from (*) to alert('Done!')</p>
<p>We can also move the label onto a separate line:</p>
<code>
outer:<br>
for (let i = 0; i < 3; i++) {...}
</code>
<p>The continue directive can also be used with a label. in this case, code execution jumps to the next iteration of the labeled loop</p>
<h3>Labels do not allow you to "Jump" anywhere</h3>
<p>Labels do not allow us to jump into an arbitrary place in the code.</p>
<p>For example, ti is impossible to do this:</p>
<code>
break label; // jump to the label below (doesn't work)<br>
label: for (...)
</code>
<p>A break directive must be inside a code block. Technically, any labelled code block will do</p>
<code>
label: {<br>
// ...<br>
break label; // works<br>
// ...<br>
}
</code>
<p>...Although, 99.9% of the time break is used inside loops, as we've seen in the example above. A continue is only possible from inside a loop.</p>
`
);
