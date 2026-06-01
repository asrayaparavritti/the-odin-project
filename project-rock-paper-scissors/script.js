// Variaveis Globais

let humanScore = 0;
let computerScore = 0;

// Computer Choice

function getComputerChoice (choiceCPU) {
    return Math.floor(Math.random() * choiceCPU);
}

console.log(getComputerChoice(3));

let computerChoice = getComputerChoice(3);

// Human Choice

function getHumanChoice () {
    let userChoice = window.prompt("Digite Pedra, Papel ou Tesoura: ");
    return userChoice;
}

let humanChoice = getHumanChoice();
