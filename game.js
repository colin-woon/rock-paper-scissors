// Prompt player to choose RPS (0=Rock, 1=Paper, 2=Scissors)
// Compare player selection and computer selection


// Generate random computer choice for RPS
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    //Gets random index from choices (0-2)
    let rand = Math.floor(Math.random() * choices.length);
    //Gets element based on the random index generated
    let computerSelection = choices[rand];
    return computerSelection;
}
function gameplay(playerSelection, computerSelection) {
    let realPlayerSelection = playerSelection.toLowerCase();
    let realComputerSelection = computerSelection.toLowerCase();
}
function game() {
    console.log(`Welcome to Rock Paper Scissors! Game of 5! 
    Choose your selection:
    1 = Rock,
    2 = Scissors,
    3 = Paper`)


}
