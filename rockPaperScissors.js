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

    const randomVariable = Math.floor(Math.random() * choice.length);
    console.log(choice[randomVariable]);
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

const playerSelection = "Rock".toUpperCase();
const computerSelection = getComputerChoice();
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    if(computerSelection === "ROCK"){

    } else if (computerSelection === "PAPER") {

    } else {
        
    }
}
