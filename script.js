const buttonsNames = ["Paper", "Rock", "Scissors"];

const buttons = buttonsNames.map((buttonText) => {
  const button = document.createElement("button");
  button.className = "btn";
  button.textContent = buttonText;
  document.body.appendChild(button);
  return button;
});
console.log(buttons.entries);

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
  console.log(computerChoice);
  return computerChoice;
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
buttons.forEach((button) => {
  button.addEventListener(
    "click",
    playRound(button.textContent, getComputerChoice)
  );
});

const game = function () {
  let playerTotal = 0;
  let computerTotal = 0;
  let roundResult;
  // for (let i = 0; i < 5; i++) {
  //   let getPlayerChoice = prompt("Choose rock, paper or scissors");
  //   console.log(getPlayerChoice);
  //   let roundResult = playRound(getPlayerChoice, getComputerChoice());
  //   console.log(roundResult);
  //   console.log(i);
  //   if (roundResult === true) {
  //     playerTotal++;
  //   } else if (roundResult === false) {
  //     computerTotal++;
  //   }
  // }
  // if (playerTotal > computerTotal) {
  //   console.log("Congrats! You won the game");
  // } else if (playerTotal < computerTotal) {
  //   console.log("Sorry, you lost the game");
  // } else {
  //   console.log("It's a draw");
  // }
  // console.log(playerTotal, computerTotal);
};

game();
