let playerScore = 0;
let computerScore = 0;

/*
computerPlay() returns computer's randomly generated choice
choices is array of choices available
Math.random() gives a random floating-point number between 0 and 1
It is multiplied by choices.length(that is, 3) to give a number between 0 and 3
Math.floor() is used to round off the number to the shortest whole number, so we will randomly get a number from 0,1 and 2
*/
function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

/*
playRound() takes two parameters: playerSelection and computerSelection
It returns the string which describes the result of the round
if-else logic is used to compare and determine
The playerSelection and computerSelection strings are compared by converting both of them to lowercase
For a win, the player is awarded 1 point; for a loss, the computer is awarded 1 point; for a draw, no points
*/
function playRound(playerSelection, computerSelection) {
    //To refine the input, make the first letter uppercase and the rest lowercase; makes it easier to compare with computerSelection
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1, playerSelection.length).toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a draw. ${playerSelection} cancels out ${computerSelection}`;
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Paper')
        || (playerSelection === 'Paper' && computerSelection === 'Rock')) {
        playerScore++;
        return `It's a win! ${playerSelection} beats ${computerSelection}`;
    } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissors')
        || (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        computerScore++;
        return `It's a loss! ${playerSelection} loses to ${computerSelection}`;
    } else {
        return `Invalid input! Please try again`;
    }
}

/*
game() will have a while loop for calling playRound() until either player or computer has 5 points
When the player or the computer reaches 5 points, alert is shown with the result of the game
*/
function game() {
    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Enter rock, paper or scissors: ");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`You: ${playerScore}`);
        console.log(`Computer: ${computerScore}`);
    }
    if (playerScore === 5) {
        alert("You won! You have defeated the computer");
    } else {
        alert("You lost! The computer has defeated you");
    }
}

game();