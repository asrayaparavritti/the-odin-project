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

function getHumanChoice () {
    let getUSER = window.prompt("Escolha Pedra, Papel ou Tesoura: ");
    getUSER = getUSER.toLowerCase();

    return getUSER;
};


function playGame () {

    let userScore = 0;
    let computerScore = 0;

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
    console.log("--- RODADA 1 ---");
    playRound(getHumanChoice(), getComputerChoice(3));
    console.log(`Placar atual - Você: ${userScore} | PC: ${computerScore}`);

    console.log("--- RODADA 2 ---");
    playRound(getHumanChoice(), getComputerChoice(3));
    console.log(`Placar atual - Você: ${userScore} | PC: ${computerScore}`);

    console.log("--- RODADA 3 ---");
    playRound(getHumanChoice(), getComputerChoice(3));
    console.log(`Placar atual - Você: ${userScore} | PC: ${computerScore}`);

    console.log("--- RODADA 4 ---");
    playRound(getHumanChoice(), getComputerChoice(3));
    console.log(`Placar atual - Você: ${userScore} | PC: ${computerScore}`);

    console.log("--- RODADA 5 ---");
    playRound(getHumanChoice(), getComputerChoice(3));
    console.log(`Placar atual - Você: ${userScore} | PC: ${computerScore}`);
}


playGame();
