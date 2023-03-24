// Rock paper scissors project 
/*
Function called ‘getComputerChoice’
- Should return a random choice of either rock, paper or scissors

Plan
- create function ‘getComputerChoice’
- create variable choice
- store in that variable an array which contains the items rock, paper and scissors
- choose a random item from that array and return it (console.log() first)
- return the array item with the index number of the random variable

Function that plays a single round of rock, paper, scissors
Takes two parameters, playerSelection and computerSelection
Returns a string of who won the round (e.g You won, rock beats scissors)
*/

function getComputerChoice() {
    const choice = ["ROCK", "PAPER", "SCISSORS"];

    let randomVariable = Math.floor(Math.random() * choice.length);
    return choice[randomVariable];
}

/*
Plan
- create function called ‘playRound’ which takes two parameters
- create computerSelection parameter which is assigned the ‘getComputerChoice’ function
- create playerSelection parameter which is assigned ‘Rock’ (will be changed later)
- create conditional which checks the value of the computer selection
- compare the value of the computer selection against the player selection
- return the result of the comparison (console log first before returning)
*/

const playerSelection = "paper".toUpperCase();
let computerSelection = getComputerChoice();   // The function is called once and the variable is set and doesnt change

// NOTE: You CAN'T redeclare variables with 'let'. Once they are set that's it


function test() {
   console.log(computerSelection);
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection === "ROCK"){
        rockChoice(playerSelection);
        return;
    } else if (computerSelection === "PAPER") {
        paperChoice(playerSelection);
        return;
    } else {
        scissorsChoice(playerSelection);
        return;
    }
}

function rockChoice(playerSelection) {
    // rock beats scissors, rock draws with rock, rock loses to paper
    if (playerSelection == "ROCK") {
        console.log("It's a draw!");
        return;
    } else if (playerSelection == "PAPER") {
        console.log("You Win! Paper beats rock");
        return;
    } else {
        console.log("You Lose! Scissors loses to rock");
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
        return;
    } else {
        console.log("You Win! Scissors beats paper");
        return;
    }

}

function scissorsChoice(playerSelection) {
    // scissors beats paper, scissors draws with scissors, scissors loses to rock
    if (playerSelection === "PAPER") {
        console.log("You Lose! Scissors beats paper");
        return;
    } else if (playerSelection === "ROCK") {
        console.log("You Win! Rock beats scissors");
        return;
    } else {
        console.log("It's a draw!");
        return;
    }
}
