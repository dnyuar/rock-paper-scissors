
function getComputerChoice() {
    const choice = ["ROCK", "PAPER", "SCISSORS"];

    let randomVariable = Math.floor(Math.random() * choice.length);
    return choice[randomVariable];
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    if(computerSelection === "ROCK"){
       return rockChoice(playerSelection);

    } else if (computerSelection === "PAPER") {
        return paperChoice(playerSelection);

    } else {
        return scissorsChoice(playerSelection);
    }
}

let playerCounter = 0;
let computerCounter = 0;

function resetCounter() {
    // To reset the counter back to 0 at the end of each game
    playerCounter = 0;
    computerCounter = 0;
}

function game() {
        let input = prompt("Rock, Paper or Scissors?").toUpperCase();
        console.log(input);
        playRound(input);
        console.log("Player wins: " + playerCounter);
        console.log("Computer wins: " + computerCounter);

    if (playerCounter > computerCounter) {
        console.log("Congrats! You won!");
    } else if (playerCounter < computerCounter) {
        console.log("You Lose! The computer won");
    } else {
        console.log("It's a draw!");
    }
    resetCounter();
       return 0;
}

function rockChoice(playerSelection) {
    // rock beats scissors, rock draws with rock, rock loses to paper
    if (playerSelection == "ROCK") {
        console.log("It's a draw!");
        return;

    } else if (playerSelection == "PAPER") {
        console.log("You Win! Paper beats rock");
        playerCounter++;
        return;
    } else {
        console.log("You Lose! Scissors loses to rock");
        computerCounter++;
        return;
    }
}

function paperChoice(playerSelection) {
    // paper beats rock, paper draws with paper, paper loses to scissors
    if (playerSelection === "PAPER") {
        console.log("It's a draw!");
        return;
    } else if (playerSelection === "ROCK") {
        console.log("You Lose! Paper beats rock");
        computerCounter++;
        return;
    } else {
        console.log("You Win! Scissors beats paper");
        playerCounter++;
        return;
    }

}

function scissorsChoice(playerSelection) {
    // scissors beats paper, scissors draws with scissors, scissors loses to rock
    if (playerSelection === "PAPER") {
        console.log("You Lose! Scissors beats paper");
        computerCounter++;
        return;
    } else if (playerSelection === "ROCK") {
        console.log("You Win! Rock beats scissors");
        playerCounter++;
        return;
    } else {
        console.log("It's a draw!");
        return;
    }
}
