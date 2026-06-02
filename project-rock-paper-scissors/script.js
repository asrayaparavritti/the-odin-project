let userScore = 0;
let computerScore = 0;

function getComputerChoice (max) {

    let getCPU = Math.floor(Math.random() * max );

    if (getCPU === 0) {
        getCPU = "pedra";
    } else if (getCPU === 1) {
        getCPU = "papel";
    } else if (getCPU === 2) {
        getCPU = "tesoura";
    }

    return getCPU;
}

console.log(getComputerChoice(3));
let computerChoice = getComputerChoice(3);

function getHumanChoice () {
    let getUSER = window.prompt("Escolha Pedra, Papel ou Tesoura: ");
    getUSER = getUSER.toLowerCase();

    return getUSER;
}

let userChoice = getHumanChoice();
console.log(userChoice);

function playRound (userChoice, computerChoice) {

    if (userChoice === computerChoice) {

        console.log("Empate!");

    } else if (

        (userChoice === "pedra" && computerChoice === "tesoura") || 
        (userChoice === "tesoura" && computerChoice === "papel") || 
        (userChoice === "papel" && computerChoice === "pedra")) 
        
    {
        console.log("Você ganhou!");
        userScore++;

    } else {
        console.log("Você perdeu!");
        computerScore++;
    }
             
}

playRound(userChoice, computerChoice);
console.log(userScore);
console.log(computerScore);