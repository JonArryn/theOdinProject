"use strict";
const log = console.log;

const resetBtn = document.querySelector(".reset__button");

const etchContainer = document.querySelector(".container");
const etchDiv = document.createElement("div");

function createGrid(gridSize) {
  // create row divs
  for (let i = 1; i <= gridSize; i++) {
    let rowDiv = document.createElement("div");
    // add row classes
    rowDiv.classList.add("etch__div");
    rowDiv.classList.add("row");
    // append rows to container
    etchContainer.appendChild(rowDiv);
    // create column divs
    for (let i = 1; i <= gridSize; i++) {
      let columnDiv = document.createElement("div");
      // add column classes
      columnDiv.classList.add("etch__div");
      columnDiv.classList.add("column");
      // append columns to each row div
      rowDiv.appendChild(columnDiv);
    }
  }
}

createGrid(64);

let etchDivs = document.querySelectorAll(".etch__div");

// // add color-changing hover affect
function sketch() {
  etchDivs.forEach((div) =>
    div.addEventListener("mouseover", function (e) {
      e.target.closest("div").classList.add("hovered");
    })
  );
}
sketch();

// // // add reset functionality

// add button to reset

// remove hovered class list from etch divs
resetBtn.addEventListener("click", function (e) {
  etchDivs.forEach((div) => {
    div.classList.remove("hovered");
  });
  newGrid();
});

// // new grid size prompt value return
function getNewSize() {
  return +prompt("Please choose a grid size up to 100");
}

// // // reBuild Grid

function newGrid() {
  // prompt user for new grid size
  let newGridSize = getNewSize();
  // check to see if user input is valid
  if (!newGridSize || newGridSize > 100 || newGridSize < 1) {
    alert("Please enter a grid size between 1 and 100");
  } else {
    // reset grid container
    etchContainer.textContent = "";
    // rebuild grid with new value
    createGrid(newGridSize);
    etchDivs = document.querySelectorAll(".etch__div");
    sketch();
  }
}
