let choices = ["rock", "paper", "scissors"];
function computerPlay() {
    return choices[Math.floor(Math.random()*3)];
}
function evaluateWinner(choice1, choice2) {
    /* 
        0 for tie,
        1 for first guy,
        2 for second guy
    */
    if (choice1 == choice2) {return 0};
    if (choice1 == "rock") {
        return choice2 == "scissors" ? 1 : 2;
    }
    if (choice1 == "paper") {
        return choice2 == "rock" ? 1 : 2;
    }
    if (choice1 == "scissors") {
        return choice2 == "paper" ? 1 : 2;
    }
    error("not rock, paper, nor scissors");
    return 0;
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = evaluateWinner(playerSelection, computerSelection);
    switch (result) {
        case 0:
            return `You both tied with ${playerSelection}!`;
            break;
        case 1:
            return `You won! ${playerSelection} beats ${computerSelection}.`;
            break;
        case 2:
            return `You lost! ${computerSelection} beats ${playerSelection}.`;
            break;
    }
}
function runGame(playerChoice) {
    const compChoice = computerPlay();
    const output = playRound(playerChoice, compChoice);
    const div = document.querySelector("#comp-choice");
    div.textContent = output;
}

const plrButtons = document.querySelectorAll(".user-choice-button");
plrButtons.forEach(function(plrButton){
    plrButton.addEventListener('click', function(e){
        runGame(plrButton.getAttribute('data-choice'));
    });
});