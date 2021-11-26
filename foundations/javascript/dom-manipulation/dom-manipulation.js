"use strict";
const log = console.log;

const exercise1Div = document.querySelector(".exercise__1");
const paragraph1 = document.createElement("p");
paragraph1.style.color = "red";
paragraph1.textContent = "Hey I'm Red!";
exercise1Div.appendChild(paragraph1);
const blueHeader = document.createElement("h3");
blueHeader.style.color = "blue";
blueHeader.textContent = "I'm a blue H3!";
exercise1Div.appendChild(blueHeader);
const innerDiv = document.createElement("div");
innerDiv.setAttribute("style", "border: 3px solid black");
exercise1Div.appendChild(innerDiv);
const innerHeader = document.createElement("h1");
innerHeader.textContent = "I'm in a div!";
innerDiv.appendChild(innerHeader);
const innerParagraph = document.createElement("p");
innerParagraph.textContent = "ME TOO!";
innerDiv.appendChild(innerParagraph);

const eventLogBtn = document.querySelector(".event__log");
eventLogBtn.addEventListener("click", function (e) {
  log(e.target);
  e.target.style.background = "blue";
});
