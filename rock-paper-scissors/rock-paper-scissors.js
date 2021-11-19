"use strict";
const log = console.log;

// Randomly select rock/paper/scissor

const computerPlay = function () {
	const selectionArr = ["rock", "paper", "scissors"];
	const min = Math.min(0);
	const max = Math.max(2);
	const arrPosition = Math.floor(Math.random() * (max - min + 1)) + min;
	const computerChoice = selectionArr[arrPosition];
	return computerChoice;
};

const playerPlay = function () {
	let playerInput = prompt("Choose one: Rock, Paper, or Scissors");
	return playerInput;
};

function game() {
	const score = {
		player: 0,
		computer: 0,
		result: "",
		winningPlay: "",
		losingPlay: "",
	};

	for (let i = 1; i <= 5; i++) {
		log(singleRound(playerPlay(), computerPlay()));
	}

	function singleRound(playerSelection, computerSelection) {
		let winnerPosition;

		if (!playerSelection) {
			alert("please input rock, paper, or scissors");
			log(singleRound(playerPlay(), computerSelection));
			return;
		}

		// turn user input to all lower case
		let playerSelectionLower = playerSelection.toLowerCase();

		// create play array that contains player and computer selection in fixed index positions
		let playArr = [playerSelectionLower, computerSelection];

		if (
			playerSelectionLower === "rock" ||
			playerSelectionLower === "paper" ||
			playerSelectionLower === "scissors"
		) {
			determineWinner(playArr);
			winnerAssignment(winnerPosition);
			log(score);
		} else {
			alert("please input rock, paper, or scissors");
			log(singleRound(playerPlay(), computerSelection));
			return;
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
			} else return "round draw";
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

		if (score.result === "draw") {
			return `It's a Draw!`;
		} else {
			return `You ${score.result}! ${score.winningPlay} beats ${score.losingPlay}`;
		}
	}

	if (score.player > score.computer) {
		log(
			`Player wins with a score of ${score.player} to ${score.computer}, who says computers are smart?`
		);
	} else if (score.player < score.computer) {
		log(
			`Computer wins with a score of ${score.computer} to ${score.player}, looks like you were outsmarted again. Better luck next time!`
		);
	} else if (score.player === score.computer) {
		log(`Looks like the odds are even. It's a draw!`);
	}
}
game();
