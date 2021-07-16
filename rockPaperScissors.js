let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");
const playerScorePara = document.querySelector("#player-score");
const computerScorePara = document.querySelector("#computer-score");
const infoPara = document.querySelector("#info");
const roundPara = document.querySelector("#round");
const restartButton = document.querySelector("#restart-btn");
restartButton.style.display = "none";

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

infoPara.textContent = "Choose your weapon.";

rockButton.addEventListener('click', () => {
    if (!gameOver) {
        let roundResult = playRound('Rock');
        let gameResult = gameScore();
        roundPara.appendChild(document.createTextNode(roundResult));
        roundPara.appendChild(document.createElement("br"));
        roundPara.appendChild(document.createTextNode(gameResult));
    }
});

paperButton.addEventListener('click', () => {
    if (!gameOver) {
        let roundResult = playRound('Paper');
        let gameResult = gameScore();
        roundPara.appendChild(document.createTextNode(roundResult));
        roundPara.appendChild(document.createElement("br"));
        roundPara.appendChild(document.createTextNode(gameResult));
    }
});

scissorsButton.addEventListener('click', () => {
    if (!gameOver) {
        let roundResult = playRound('Scissors');
        let gameResult = gameScore();
        roundPara.appendChild(document.createTextNode(roundResult));
        roundPara.appendChild(document.createElement("br"));
        roundPara.appendChild(document.createTextNode(gameResult));
    }
});

restartButton.addEventListener('click', () => {
    if (gameOver) {
        playerScore = 0;
        computerScore = 0;
        gameScore();
        gameOver = false;
        restartButton.style.display = "none";
        const clearPara = document.querySelectorAll("#round");
        for (let i = 0; i < clearPara.length; i++) {
            clearPara[i].textContent = "";
        }
    }
});

function playRound(playerSelection) {
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
    playerScorePara.textContent = `${playerScore}`;
    computerScorePara.textContent = `${computerScore}`;
    while (playerScore < 5 && computerScore < 5) {
        return ("");
    }
    if (playerScore === 5) {
        gameOver = true;
        restartButton.style.display = "block";
        return ("YOU WON! YOU HAVE DEFEATED THE COMPUTER.");
    } else if (computerScore === 5) {
        gameOver = true;
        restartButton.style.display = "block";
        return ("YOU LOST! THE COMPUTER HAS DEFEATED YOU.");
    } else {
        return;
    }
}