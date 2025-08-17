// for theme changer
const themeBtn = document.getElementById('theme-changer-div');
const details = document.querySelector('details');
const button = document.querySelector('button');
const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');
// logic for game

function getRandomComputerResults() {
    const array = ["Rock", "Scissors", "Paper"];
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResults();

    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
        return `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}
const playerScores = document.querySelectorAll('.player-scores');
const computerScores = document.querySelectorAll('.computer-scores');
const results = document.querySelectorAll('.results');


// theme changes
themeBtn.addEventListener('click', () => {
    // body
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    //details border
    details.classList.toggle('dark');
    details.classList.toggle('light');
    //buttons
    rockBtn.classList.toggle('dark');
    rockBtn.classList.toggle('light');
    scissorsBtn.classList.toggle('dark');
    scissorsBtn.classList.toggle('light');
    paperBtn.classList.toggle('dark');
    paperBtn.classList.toggle('light');
});