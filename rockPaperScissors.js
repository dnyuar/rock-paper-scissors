
function getComputerChoice() {
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    let randomVariable = Math.floor(Math.random() * choice.length);
    return choice[randomVariable];
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    if (computerSelection === "ROCK") {
        return rockChoice(playerSelection);

    } else if (computerSelection === "PAPER") {
        return paperChoice(playerSelection);

    } else {
        return scissorsChoice(playerSelection);
    }
}

let playerCounter = 0;
let computerCounter = 0;

document.getElementById("computerScore").innerText = "Computer wins: " + computerCounter
document.getElementById("userScore").innerText = "Player wins: " + playerCounter

function resetCounter() {
    // To reset the counter back to 0 at the end of each game
    playerCounter = 0;
    computerCounter = 0;
}

const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", function(){
    resetCounter();
    document.getElementById("test").innerText = "";
    document.getElementById("computerScore").innerText = "Computer wins: " + computerCounter;
    document.getElementById("userScore").innerText = "Player wins: " + playerCounter;
})

function game(input) {
    playRound(input);
    console.log("Click a button");
    document.getElementById("computerScore").innerText = "Computer wins: " + computerCounter;
    document.getElementById("userScore").innerText = "Player wins: " + playerCounter;
    console.log("Player wins: " + playerCounter);
    console.log("Computer wins: " + computerCounter);

        if (playerCounter == 5) {
            result();
        } else if (computerCounter == 5) {
            result();
        }
    return 0;
}

function result() {
    if (playerCounter > computerCounter) {
        document.getElementById("test").innerText = "Congrats! You won!";
        } else if (playerCounter < computerCounter) {
        document.getElementById("test").innerText = "You Lose! The computer won";
    } else {
    document.getElementById("test").innerText = "It's a draw!"
}
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
rockButton.addEventListener("click", function () {
    game("ROCK");
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", function () {
    game("PAPER");
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", function () {
    game("SCISSORS");
});
