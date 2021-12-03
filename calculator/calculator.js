"use strict";
const log = console.log;

// DOM Selectors

const allButtons = document.querySelectorAll(".button");
const displayText = document.getElementById("number__span");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
const decimalBtn = document.querySelector(".decimal");
const backBtn = document.querySelector(".backspace");

// button styling

// helper functions for adding and removing css classes and applying event listeners

// add event listener

function addListener(element, event, callBackFn) {
  element.addEventListener(event, callBackFn);
}

// add/remove classList
function addClassList(element, event, className) {
  addListener(element, event, function () {
    element.classList.add(className);
  });
}
function removeClassList(element, event = "", className) {
  addListener(element, event, function () {
    element.classList.remove(className);
  });
}

// click effect
allButtons.forEach((button) => {
  addClassList(button, "mousedown", "clicked");
});
allButtons.forEach((button) => {
  removeClassList(button, "mouseup", "clicked");
});

// hover effect
allButtons.forEach((button) => addClassList(button, "mouseover", "hover"));
allButtons.forEach((button) => removeClassList(button, "mouseout", "hover"));

// // // what do I need to do?

const state = {
  currentValue: "",
  previousValue: "",
  currentOperator: "",
  inEquals: false,
  inOperation: false,
};

// clear content helper function
function clearContent(element) {
  element.textContent = "";
}

// initialization function

function init() {
  state.currentValue = "";
  state.previousValue = "";
  state.currentOperator = "";
  displayText.textContent = "0";
  decimalBtn.dataset.value = ".";
  operatorBtns.forEach((button) => {
    button.classList.remove("in__use");
  });
}

function enterValues(buttonValue) {
  if (state.inEquals) {
    init();
    state.inEquals = false;
  }
  clearContent(displayText);
  state.inOperation = true;
  state.currentValue += buttonValue;

  displayText.textContent = state.currentValue;

  if (state.currentValue.includes(".")) {
    decimalBtn.dataset.value = "";
  }
}

// listen for number clicks
numberBtns.forEach((button) => {
  addListener(button, "click", function () {
    enterValues(button.dataset.value);
  });
});

// number keyboard
addEventListener("keydown", function (event) {
  event.preventDefault();
  const keyValue = event.key;
  numberBtns.forEach((button) => {
    if (keyValue === button.dataset.value) {
      enterValues(button.dataset.value);
    }
  });
});

// when an operator is clicked

function operate(button) {
  if (!state.inOperation) {
    return;
  }

  if (state.inEquals) {
    state.currentOperator = button.dataset.operation;
    state.inEquals = false;
    return;
  }

  performOperation(
    +state.previousValue,
    +state.currentValue,
    state.currentOperator
  );

  //clear the current value,
  state.currentValue = "";
  //store the selected operator into a variable,
  state.currentOperator = button.dataset.operation;
  //re-activate decimal
  decimalBtn.dataset.value = ".";
  //add the "clicked" class to the operator,
  button.classList.add("in__use");
  state.inOperation = true;
}

operatorBtns.forEach((button) => {
  addListener(button, "click", function () {
    operate(button);
  });
});

addEventListener("keydown", function (event) {
  console.log(event.key);
  const keyValue = event.key;
  operatorBtns.forEach((operator) => {
    if (keyValue == operator.dataset.operation) {
      operate(operator);
    }
  });
});

function runEquals() {
  if (!state.previousValue) {
    return;
  }
  performOperation(
    +state.previousValue,
    +state.currentValue,
    state.currentOperator
  );
  state.currentValue = "";
  state.inEquals = true;
}
addEventListener("keydown", (event) => {
  const keyValue = event.key;
  if (keyValue === "=" || keyValue === "Enter") {
    runEquals();
  }
});
equalBtn.addEventListener("click", runEquals);

// rounding function

function round(value, precision) {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// operate function

function performOperation(num1, num2, operation) {
  if (num2 === 0 && state.currentOperator === "/") {
    init();
    displayText.textContent = "Cannot Divide By Zero";
    return;
  }
  switch (operation) {
    case "+":
      state.currentValue = round(num1 + num2, 20);
      break;
    case "-":
      state.currentValue = round(num1 - num2, 20);
      break;
    case "/":
      state.currentValue = round(num1 / num2, 20);
      break;
    case "*":
      state.currentValue = round(num1 * num2, 20);
  }
  decimalBtn.dataset.value = ".";
  displayText.textContent = state.currentValue;
  state.previousValue = state.currentValue;
  operatorBtns.forEach((button) => {
    button.classList.remove("in__use");
  });
}

function backspace() {
  if (state.inEquals) {
    init();
    displayText.textContent = 0;
    return;
  }
  if (state.currentValue.length <= 1) {
    state.currentValue = "";
    displayText.textContent = 0;
    return;
  }
  state.currentValue = state.currentValue.slice(
    0,
    state.currentValue.length - 1
  );
  displayText.textContent = state.currentValue;
}

// backspace button listener
addEventListener("keydown", (event) => {
  const keyValue = event.key;
  if (keyValue === "Backspace" || keyValue === "Delete") {
    backspace();
  }
});

// backspace clicks listener
backBtn.addEventListener("click", function () {
  backspace();
});

// clear button init
clearBtn.addEventListener("click", init);

// // if new number

// if a new number is clicked after an operation is performed, clear all values and display - "Reset" the calculator
