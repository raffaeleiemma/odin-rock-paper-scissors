const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");
const resultRound = document.createElement("div");
const resultTotal = document.createElement("div");

let playerTotal = 0;
let computerTotal = 0;
let roundCount = 0;
const totalRound = 4;

buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";
document.body.append(buttonRock, buttonPaper, buttonScissors);
const buttons = document.getElementsByTagName("button");
const buttonsArray = Array.from(buttons);
const playRound = function (playerSelection, computerSelection) {
  let playerScore;
  let winner;

  if (playerSelection === computerSelection) {
    winner = "It's a draw";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore = true;
    winner = "You win: Rock beats scissors";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    playerScore = false;
    winner = "You lose: Paper beats rock";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore = true;
    winner = "You win: Scissors beats paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    playerScore = false;
    winner = "You lose: Rock beats scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore = true;
    winner = "You win: Paper beats rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    playerScore = false;
    winner = "You lose: Scissors beats paper";
  }

  return { playerScore, winner };
};

const getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  let computerChoice;
  if (randomNumber === 1) {
    computerChoice = "Rock";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  return computerChoice;
};

const game = function (playerChoice) {
  let getPlayerChoice = playerChoice;

  let { playerScore, winner } = playRound(getPlayerChoice, getComputerChoice());

  if (playerScore === true) {
    playerTotal++;
  } else if (playerScore === false) {
    computerTotal++;
  }
  resultRound.textContent = winner;
};
buttonsArray.map((button) => {
  button.addEventListener("click", () => {
    document.body.appendChild(resultTotal);

    if (roundCount < totalRound) {
      const playerChoice = button.textContent;

      document.body.appendChild(resultRound);
      game(playerChoice);
      roundCount++;
      document.body.removeChild(resultTotal);
    } else if (roundCount === totalRound) {
      if (playerTotal < computerTotal) {
        resultTotal.textContent = "You lost";
      } else if (playerTotal > computerTotal) {
        resultTotal.textContent = "You won";
      } else {
        resultTotal.textContent = "It's a draw";
      }

      playerTotal = 0;
      computerTotal = 0;
      roundCount = 0;
      if (document.body.contains(resultTotal)) {
        document.body.removeChild(resultTotal);
      }
      document.body.appendChild(resultTotal);
    }
  });
});
