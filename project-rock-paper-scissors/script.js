console.log("Hello World!");

function getComputerChoice (choice) {
    return Math.floor(Math.random() * choice);
}

console.log(getComputerChoice(3));