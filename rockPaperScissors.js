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

const playerSelection = "rock".toUpperCase();
// let computerSelection = getComputerChoice();   // The function is called once and the variable is set and doesnt change

// NOTE: You CAN'T redeclare variables with 'let'. Once they are set that's it
// You can reassign a 'let' and 'var' variable however

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    if(computerSelection === "ROCK"){
       return rockChoice(playerSelection);
       console.log("Player counter: " + playerCounter);
       console.log("Computer counter: " + computerCounter);

        
    } else if (computerSelection === "PAPER") {
        return paperChoice(playerSelection);
        console.log("Player counter: " + playerCounter);
        console.log("Computer counter: " + computerCounter);
        return;

    } else {
        return scissorsChoice(playerSelection);
        console.log("Player counter: " + playerCounter);
        console.log("Computer counter: " + computerCounter);
        return;

    };
}

/*
Create a new function called ‘game’
The ‘playRound’ function is called 5 times inside the game function
‘Game’ function keeps score of each round played and who won
Game function should then return the winner of the game

The ‘playRound’ function should now take input from the user instead of it being set in the code.
Need to ask the user for the input for the function

- create new function ‘game’ - DONE
- create variables for both the player and computer which will count who has won each round (outside of game function) - DONE
- update choice functions to increase either player or computer count by 1 depending on who won the game - DONE
- asks the user for an input of rock, paper or scissors - DONE
- set that to upper case for what they typed in (can add validation later) - DONE
- Add in the playRound function into the game function - DONE
- pass that variable as the playerSelection - DONE
- create a loop that calls the playRound function 5 times
- after each loop, update a counter for the player or computer
- at the end of the game return the winner of the game or if it is a draw by checking the player and computer counters
*/

let playerCounter = 0;
let computerCounter = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        let input = prompt("Rock, Paper or Scissors?").toUpperCase();
        console.log(input);
        playRound(input);
    }
       return 0;
}

function test() {
    for (let i = 0; i < 5; i ++)
    {
        console.log(i);
    }
    return;
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
