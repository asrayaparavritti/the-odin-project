function getComputerChoice (max){

    let computerChoice = Math.floor(Math.random() * max);

    if (computerChoice === 0){
        computerChoice = "tesoura";
    } else if (computerChoice === 1){
        computerChoice = "pedra";
    } else if (computerChoice === 2){
        computerChoice = "papel";
    } return computerChoice;

}

function getHumanChoice (){

    let userChoice = window.prompt("Escolha Pedra, Papel ou Tesoura: ");
    return userChoice.toLowerCase();

}

function playGame (){

    let computerScore = 0;
    let userScore = 0;

    function playRound (userChoice, computerChoice){

        if (userChoice === computerChoice){
            console.log("Empate!");
        } else if (userChoice === "pedra" && computerChoice === "tesoura" ||
            userChoice === "papel" && computerChoice === "pedra" ||
            userChoice === "tesoura" && computerChoice === "papel"
        ){
            console.log("Você ganhou!");
            userScore++;
        } else if (userChoice === "tesoura" && computerChoice === "pedra" ||
            userChoice === "pedra" && computerChoice === "papel" ||
            userChoice === "papel" && computerChoice === "tesoura"
        ){
            console.log("Você perdeu!");
            computerScore++;
        }

    }

    console.log("Rodada 1");

    playRound(getHumanChoice(), getComputerChoice(3));
    console.log(`Pontuação do usuario: ${userScore} | Pontuação do Computador: ${computerScore}`)

    console.log("Rodada 2");

    playRound(getHumanChoice(), getComputerChoice(3));
    console.log(`Pontuação do usuario: ${userScore} | Pontuação do Computador: ${computerScore}`)

    console.log("Rodada 3");

    playRound(getHumanChoice(), getComputerChoice(3));
    console.log(`Pontuação do usuario: ${userScore} | Pontuação do Computador: ${computerScore}`)

    console.log("Rodada 4");

    playRound(getHumanChoice(), getComputerChoice(3));
    console.log(`Pontuação do usuario: ${userScore} | Pontuação do Computador: ${computerScore}`)

    console.log("Rodada 5");

  


}

playGame();