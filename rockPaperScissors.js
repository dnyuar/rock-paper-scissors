
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
        // let input = prompt("Rock, Paper or Scissors?").toUpperCase();
        // console.log(input);
        // playRound(input);
        console.log("Click a button");
        console.log("Player wins: " + playerCounter);
        console.log("Computer wins: " + computerCounter);

    if (playerCounter > computerCounter) {
        document.getElementById("test").innerText = "Congrats! You won!";
    } else if (playerCounter < computerCounter) {
        document.getElementById("test").innerText = "You Lose! The computer won";
    } else {
        document.getElementById("test").innerText = "It's a draw!"
    }
    resetCounter();
       return 0;
}

function rockChoice(playerSelection) {
    // rock beats scissors, rock draws with rock, rock loses to paper
    if (playerSelection == "ROCK") {
        document.getElementById("test").innerText = "It's a draw!";
        return;

    } else if (playerSelection == "PAPER") {
        document.getElementById("test").innerText = "You Win! Paper beats rock";
        playerCounter++;
        return;
    } else {
        document.getElementById("test").innerText = "You Lose! Scissors loses to rock";
        computerCounter++;
        return;
    }
}

function paperChoice(playerSelection) {
    // paper beats rock, paper draws with paper, paper loses to scissors
    if (playerSelection === "PAPER") {
        document.getElementById("test").innerText = "It's a draw!";
        return;
    } else if (playerSelection === "ROCK") {
        document.getElementById("test").innerText = "You Lose! Paper beats rock";
        computerCounter++;
        return;
    } else {
        document.getElementById("test").innerText = "You Win! Scissors beats paper";
        playerCounter++;
        return;
    }

}

function scissorsChoice(playerSelection) {
    // scissors beats paper, scissors draws with scissors, scissors loses to rock
    if (playerSelection === "PAPER") {
        document.getElementById("test").innerText = "You Lose! Scissors beats paper";
        computerCounter++;
        return;
    } else if (playerSelection === "ROCK") {
        document.getElementById("test").innerText = "You Win! Rock beats scissors";
        playerCounter++;
        return;
    } else {
        document.getElementById("test").innerText = "It's a draw!";
        return;
    }
}

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function() {
    playRound("ROCK");
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", function() {
    playRound("PAPER");
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", function() {
    playRound("SCISSORS");
});
