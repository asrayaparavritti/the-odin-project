function getComputerChoice (max) {
    let getCPU = Math.floor(Math.random() * max);
    if (getCPU === 0) {
        getCPU = "pedra";
    } else if (getCPU === 1) {
        getCPU = "papel";
    } else if(getCPU === 2) {
        getCPU = "tesoura";
    }
    return getCPU;
}

console.log(getComputerChoice(3));

function getHumanChoice () {
    let getUSER = window.prompt("Escolha Pedra, Papel ou Tesoura: ");
    getUSER = getUSER.toLowerCase();
    return getUSER;
}

function playGame () {
    let userScore = 0;
    let computerScore = 0;
    
    function playRound (userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            console.log("Empate");
        } else if (
            (userChoice === "pedra" && computerChoice === "tesoura" ||
            (userChoice === "tesoura" && computerChoice === "papel" ||
            (userChoice === "papel" && computerChoice === "pedra")
            )
            )
        ) {
            console.log("Voce ganhou!");
            userScore++;
        } else {
            console.log("Voce perdeu!");
            computerScore++;
        }
    }

}