"use strict";
const log = console.log;

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  audio.currentTime = 0; // rewind to start
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip if it is not a transform
  log(e.propertyName);
  this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
