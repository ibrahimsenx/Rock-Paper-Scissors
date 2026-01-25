function getComputerChoice() {

let computerChoice = Math.random()

if (computerChoice < 0.33) {
  return "rock";;
}
else if (computerChoice < 0.66 ) {
  return "paper";;
}
else {
  return "scissor";;
}

return computerChoice;
}


function getHumanChoice() {


let humanChoice = prompt("Rock, Paper or Scissors?");

if (!humanChoice) {
    return getHumanChoice();
}

humanChoice = humanChoice.toLowerCase();


if (humanChoice == "rock") {
  return "rock";
}

else if (humanChoice == "paper") {
  return "paper";
}

else if (humanChoice == "scissors") {
  return "scissors";
}

else {
  prompt("you should pick either rock, paper or scissors");
}

 return getHumanChoice()

}

let humanScore = 0
let computerScore = 0

function playGame() {

  function playRound(humanChoice, computerChoice) {

  let human = humanChoice.toLowerCase();
  let computer = computerChoice.toLowerCase();

  alert("Human choice is " + human);
  alert("Computer choice is " + computer);

  if (human === "rock" && computer === "paper") {
  alert("You lose! Paper beats rock");
  computerScore++
  }

  else if (human === "rock" && computer === "scissors") {
  alert("You win! Rock beats scissors");
  humanScore++
  }

  else if (human === "paper" && computer === "rock") {
  alert("You win! Paper beats rock");
  humanScore++
  }

  else if (human === "paper" && computer === "scissor") {
  alert("You lose! Scissors beats paper");
  computerScore++
  }

  else if (human === "scissors" && computer === "rock") {
  alert("You lose! Rock beats scissors");
  computerScore++
  }

  else if (human === "scissors" && computer === "paper") {
  alert("You win! Scissors beats paper");
  humanScore++
  }

  else if (human === "rock" && computer === "rock") {
  alert("it's a tie");
  }

  else if (human === "paper" && computer === "paper") {
  alert("it's a tie");
  }

  else if (human === "scissors" && computer === "scissors") {
  alert("it's a tie");
  }

  alert("Human Score: " + humanScore);
  alert("Computer Score: " + computerScore);


  }

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
}

playGame();
playGame();
playGame();
playGame();
playGame();

