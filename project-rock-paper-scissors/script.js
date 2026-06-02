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
let computerChoice = getComputerChoice();

function getHumanChoice () {
    let getUSER = window.prompt("Escolha Pedra, Papel ou Tesoura: ");
    getUSER = getUSER.toLowerCase();

    return getUSER;
}

console.log(getHumanChoice());
let userChoice = getHumanChoice();