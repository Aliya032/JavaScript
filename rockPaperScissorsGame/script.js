
// First we are getting the computer's choice by using Math.Random
function getRandomComputerResult() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
}

// Setting the early scores to 0
let playerScore = 0;
let computerScore = 0; 


// Checking who won the round. 
function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}


// Here we check if anyone won the round and return the winning statements
function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult == userOption) {
        return `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

// selecting all the elements using document.getElementByID 
// so we can change or update them 
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");


function showResults(userOption) {
    roundResultsMsg.innerText= getRoundResults(userOption);
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;

    if (playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = `${playerScore === 3 ? "Player": "Computer"} has won the game!`;
    
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
    }
};


// resetting the game requires you to set the player & computer scores to 0 and displaying them as 0 using .innerText
// putting winnermsglelement & roundresultsmsg to an empty string 
// when resetting the game the reset game button goes to none and the options container is visible again
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = 0;
    computerScoreSpanElement.innerText = 0;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    winnerMsgElement.innerText = '';
    roundResultsMsg.innerText = '';
};

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scisscorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function() {
    showResults("Rock");
});

paperBtn.addEventListener("click", function() {
    showResults("Paper");
})

scisscorsBtn.addEventListener("click", function() {
    showResults("Scissors")
})
