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

console.log(getHumanChoice());

let humanChoice = getHumanChoice();

// PlayRound

function playRound (humanChoice, computerChoice) {
    let escolhaUser = humanChoice.toLowerCase();
    let escolhaCPU = computerChoice;

    if ( escolhaCPU === 0) {
        escolhaCPU = "pedra";
    } else if (escolhaCPU === 1) {
        escolhaCPU = "papel";
    } else if (escolhaCPU === 2) {
        escolhaCPU = "tesoura";
    }
    
}