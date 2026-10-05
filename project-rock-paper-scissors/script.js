
 // Global variables

 let humanScore = 0;
 let computerScore = 0;
 
 // Computer Choice
 
 function getComputerChoice () {
  
  let cpuChoice = Math.floor(Math.random() * 3);

  if (cpuChoice === 0) {
    cpuChoice = "pedra";

  } else if (cpuChoice === 1) {
    cpuChoice = "papel";

  } else {
    cpuChoice = "tesoura";
  }

  return cpuChoice;

 }

 // User Choice

 function getHumanChoice () {

  let humanChoice = prompt("Digite a sua escolha: ");

  return humanChoice;

 }

 // Play Game

 function playGame() {

  function playRound (humanChoice, computerChoice) {

  humanChoice = humanChoice.toLowerCase();

  if (computerChoice === humanChoice) {
    console.log("Empate!")

  } else if ( computerChoice === "pedra" && humanChoice === "papel") {
    humanScore++;
    console.log("O usuario ganhou esse Round!");

  } else if ( computerChoice === "papel" && humanChoice === "tesoura") {
    humanScore++;
    console.log("O usuario ganhou esse Round!");

  } else if ( computerChoice === "tesoura" && humanChoice === "pedra") {
    humanScore++;
    console.log("O usuario ganhou esse Round!");

  } else {
    computerScore++;
    console.log("O computador ganhou esse Round!")
  }

 }

 let humanSelection = getHumanChoice();
 let computerSelection = getComputerChoice();

 playRound(humanSelection, computerSelection);

 humanSelection = getHumanChoice();
 computerSelection = getComputerChoice();

 playRound(humanSelection, computerSelection);

 humanSelection = getHumanChoice();
 computerSelection = getComputerChoice();

 playRound(humanSelection, computerSelection);

 humanSelection = getHumanChoice();
 computerSelection = getComputerChoice();

 playRound(humanSelection, computerSelection);

 humanSelection = getHumanChoice();
 computerSelection = getComputerChoice();

 playRound(humanSelection, computerSelection);

 if (humanScore > computerScore) {
  console.log(`O usuario ganhou com ${humanScore} pontos!`);
 } else if ( computerScore > humanScore) {
  console.log(`O computador ganhou com ${computerScore} pontos!`);
 } else {
  console.log("Empate!")
 }

 }