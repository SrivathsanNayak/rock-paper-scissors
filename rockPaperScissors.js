let playerScore = 0;
let computerScore = 0;

function game() {
    const rockButton = document.querySelector("#rock-btn");
    rockButton.addEventListener('click', () => {
        console.log(playRound('Rock'));
        console.log(gameScore());
    });

    const paperButton = document.querySelector("#paper-btn");
    paperButton.addEventListener('click', () => {
        console.log(playRound('Paper'));
        console.log(gameScore());
    });

    const scissorsButton = document.querySelector("#scissors-btn");
    scissorsButton.addEventListener('click', () => {
        console.log(playRound('Scissors'));
        console.log(gameScore());
    });

    const infoPara = document.querySelector("#info");
    const roundPara = document.querySelector("#round");
    const finalPara = document.querySelector("#final-result");

    infoPara.textContent = "Choose your weapon.";

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
    function playRound(playerSelection) {
        //To refine the input, make the first letter uppercase and the rest lowercase; makes it easier to compare with computerSelection
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1, playerSelection.length).toLowerCase();
        const computerSelection = computerPlay();

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

    function gameScore() {
        while (playerScore < 5 && computerScore < 5) {
            return (`You: ${playerScore}\nComputer: ${computerScore}`);
        }
        if (playerScore === 5) {
            return ("You won! You have defeated the computer");
        } else {
            return ("You lost! The computer has defeated you");
        }
    }
}

game();