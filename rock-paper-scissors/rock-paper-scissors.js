"use strict";
const log = console.log;

const buttons = document.querySelectorAll(".play__button");

const currentPlayDiv = document.querySelector(".current__play");
const scoreDiv = document.querySelector(".score");
const roundResultsDiv = document.querySelector(".round__result");
const gameResultsDiv = document.querySelector(".game__result");
const resetDiv = document.querySelector(".reset__div");

const currentPlayDisplay = document.createElement("p");
const scoreDisplay = document.createElement("p");
const resultsDisplay = document.createElement("p");
const gameResultsDisplay = document.createElement("p");
const resetButton = document.createElement("button");

resetButton.textContent = "Reset Game";

currentPlayDiv.appendChild(currentPlayDisplay);
scoreDiv.appendChild(scoreDisplay);
roundResultsDiv.appendChild(resultsDisplay);
gameResultsDiv.appendChild(gameResultsDisplay);
resetDiv.appendChild(resetButton);

let winnerPosition;
let playArr;

// stores game scores and game data

const score = {
  player: 0,
  computer: 0,
  result: "",
  winningPlay: "",
  losingPlay: "",
};

function init() {
  buttons.forEach((button) => (button.style.display = "initial"));
  score.player = 0;
  score.computer = 0;
  score.result = "";
  score.winningPlay = "";
  score.losingPlay = "";

  currentPlayDisplay.textContent = "";
  scoreDisplay.textContent = "";
  resultsDisplay.textContent = "";
  gameResultsDisplay.textContent = "";
}

// Randomly select rock/paper/scissor for computer play

function computerPlay() {
  const selectionArr = ["rock", "paper", "scissors"];
  const min = Math.min(0);
  const max = Math.max(2);
  const arrPosition = Math.floor(Math.random() * (max - min + 1)) + min;
  const computerChoice = selectionArr[arrPosition];
  return computerChoice;
}

// determine winner by comparing two values in array
// player is position 0 and computer is position 1 in playArr
// assignes indexOf() winning play to winnerPosition variable
// add 1 to result to avoid falsy value of 0
function determineWinner(gameArr) {
  if (gameArr.includes("paper") && gameArr.includes("rock")) {
    winnerPosition = gameArr.indexOf("paper") + 1;
  } else if (gameArr.includes("rock") && gameArr.includes("scissors")) {
    winnerPosition = gameArr.indexOf("rock") + 1;
  } else if (gameArr.includes("scissors") && gameArr.includes("paper")) {
    winnerPosition = gameArr.indexOf("scissors") + 1;
  } else if (gameArr[0] === gameArr[1]) {
    winnerPosition = "";
    ("round draw");
  }
}

// winner/loser assignment
function winnerAssignment(winner) {
  if (winner === 1) {
    // assign winner point
    ++score.player;
    // assign player's round result
    score.result = "won";
    // store winning play selection in score object
    // subtract 1 from exiting value to undo falsy avoidance
    score.winningPlay = playArr[winnerPosition - 1];
    // assigns losing selection to score object
    score.losingPlay = playArr[1];
  } else if (winner === 2) {
    ++score.computer;
    score.result = "lost";
    score.winningPlay = playArr[winnerPosition - 1];
    score.losingPlay = playArr[0];
  } else {
    score.result = "draw";
  }
}

//round result string to return
function roundResult() {
  if (score.result === "draw") {
    resultsDisplay.textContent = `It's a Draw!`;
  } else {
    resultsDisplay.textContent = `You ${score.result}! ${score.winningPlay} beats ${score.losingPlay}`;
  }
}

function displayResults() {
  if (score.player > score.computer) {
    gameResultsDisplay.textContent = `Player wins with a score of ${score.player} to ${score.computer}, who says computers are smart?`;
  } else if (score.player < score.computer) {
    gameResultsDisplay.textContent = `Computer wins with a score of ${score.computer} to ${score.player}, looks like you were outsmarted again. Better luck next time!`;
  } else if (score.player === score.computer) {
    gameResultsDisplay.textContent = `Looks like the odds are even. It's a draw!`;
  }
}

function playRound(playerSelection, computerSelection) {
  playArr = [playerSelection, computerSelection];
  log(playArr);

  determineWinner(playArr);
  winnerAssignment(winnerPosition);
  log(score);

  // diplay player/computer selection
  currentPlayDisplay.textContent = `Player Selected: ${playArr[0]} ||    Computer Selected: ${playArr[1]}`;

  // display current score
  scoreDisplay.textContent = `Player Score: ${score.player} || Computer Score: ${score.computer}`;

  roundResult();

  if (score.player === 5 || score.computer === 5) {
    displayResults();
    buttons.forEach((button) => (button.style.display = "none"));
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(this.value, computerPlay());
  });
});

resetButton.addEventListener("click", init);
