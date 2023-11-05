const getComputerChoice = function () {
  let number = Math.floor(Math.random() * 3 + 1);

  let choice;
  if (number === 1) {
    choice = "Rock";
  } else if (number === 2) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  console.log(choice);
  return choice;
};

const getPlayerChoice = function (choice) {
  let playerChoice = choice.toLowerCase();
  choice = playerChoice.slice(0, 1).toUpperCase() + playerChoice.slice(1);
  console.log(choice);
  return choice;
};

const play = function (playerSelection, computerSelection) {
  let result;
  let playerScore = 0;
  let computerScore = 0;
  if (playerSelection === computerSelection) {
    result = "It's a draw";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    result = "You win: Rock beats scissors";
    playerScore++;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    result = "You lose: Paper beats rock";
    computerScore++;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    result = "You win: Scissors beats paper";
    playerScore++;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    result = "You lose: Rock beats scissors";
    computerScore++;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    result = "You win: Paper beats rock";
    playerScore++;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    result = "You lose: Scissors beats paper";
    computerScore++;
  }
  console.log(result);

  return result;
};
const game = function () {
  let totalPlayer;
  let totalComputer;
  for (let i = 0; i < 5; i++) {
    play(getPlayerChoice("paper"), getComputerChoice());
  }
};
game();
