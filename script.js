const getComputerChoice = function () {
  let number = Math.floor(Math.random() * 3 + 1);

  let selection;
  if (number === 1) {
    selection = "Rock";
  } else if (number === 2) {
    selection = "Paper";
  } else {
    selection = "Scissors";
  }
  console.log(selection);
  return selection;
};

const playRound = function (playerSelection, computerSelection) {
  let playerChoice =
    playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1);
  console.log(playerChoice);

  let playerScore;

  if (playerChoice === computerSelection) {
    console.log("It's a draw");
  } else if (playerChoice === "Rock" && computerSelection === "Scissors") {
    playerScore = true;
    console.log("You win: Rock beats scissors");
  } else if (playerChoice === "Rock" && computerSelection === "Paper") {
    playerScore = false;
    console.log("You lose: Paper beats rock");
  } else if (playerChoice === "Scissors" && computerSelection === "Paper") {
    playerScore = true;
    console.log("You win: Scissors beats paper");
  } else if (playerChoice === "Scissors" && computerSelection === "Rock") {
    playerScore = false;
    console.log("You lose: Rock beats scissors");
  } else if (playerChoice === "Paper" && computerSelection === "Rock") {
    playerScore = true;
    console.log("You win: Paper beats rock");
  } else if (playerChoice === "Paper" && computerSelection === "Scissors") {
    playerScore = false;
    console.log("You lose: Scissors beats paper");
  }
  console.log(playerScore);
  return playerScore;
};

const game = function () {
  let playerTotal = 0;
  let computerTotal = 0;
  let result;
  for (let i = 0; i < 5; i++) {
    let getPlayerChoice = prompt("Choose rock, paper or scissors");
    console.log(getPlayerChoice);
    let result = playRound(getPlayerChoice, getComputerChoice());
    console.log(result);
    console.log(i);
    if (result === true) {
      playerTotal++;
    } else if (result === false) {
      computerTotal++;
    }
  }
  if (playerTotal > computerTotal) {
    console.log("Congrats! You won the game");
  } else if (playerTotal < computerTotal) {
    console.log("Sorry, you lost the game");
  } else {
    console.log("It's a draw");
  }
  console.log(playerTotal, computerTotal);
};

game();
