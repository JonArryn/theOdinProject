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
