"use strict";
const log = console.log;

const divs = document.querySelectorAll("div");

function logText(e) {
  log(this.classList.value);
  // e.stopPropagation(); // stop bubbling!
}

divs.forEach((div) =>
  div.addEventListener("click", logText, { capture: false, once: false })
);

// add eventlistener takes an options object, capture and once which take boolean values
// capture: true - will trigger the event on capture rather than on the bubble
// once: true will only fire the event once then unbind itself from the node
// you can stop propogation by throwing the stopPropagation method in your funciton which will prevent event bubbling and only fire the event on the element that was interacted with
