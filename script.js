// for theme changer
const themeBtn = document.getElementById('theme-changer-div');
const details = document.querySelector('details');
const button = document.querySelector('button');
const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');
const paperBtn = document.getElementById('paper');




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